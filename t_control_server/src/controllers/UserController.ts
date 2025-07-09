import { Request, Response } from 'express';
import { createUserSchema, deleteUserParamsSchema, getUserBySchema, updateUserBodySchema, updateUserParamsSchema } from '../schemas/userSchema';
import UserService from '../services/userService';
import { instanceToPlain } from 'class-transformer';

class UserController {
  async createUser(req: Request, res: Response): Promise<any>{
    const parseResult = createUserSchema.safeParse(req.body);

    if (!parseResult.success) {
      const formattedErrors = parseResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors})
    }
    
    const user = await UserService.createUser(parseResult.data);
    
    return res.status(201).json(instanceToPlain(user));
  }

  async getAllUsers(req: Request, res: Response): Promise<any>{
    const users = await UserService.getAllUsers();
    
    return res.json(users);
  }

  async getUserBy(req: Request, res: Response): Promise<any>{
    const parseParamsResult = getUserBySchema.safeParse(req.params);

    if (!parseParamsResult.success) {
      const formattedErrors = parseParamsResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors})
    }

    const user = await UserService.getUserBy(parseParamsResult.data);
    
    return res.json(instanceToPlain(user));
  }

  async updateUser(req: Request, res: Response): Promise<any>{
    const parseParamsResult = updateUserParamsSchema.safeParse(req.params);

    if (!parseParamsResult.success) {
      const formattedErrors = parseParamsResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors})
    }

    const parseBodyResult = updateUserBodySchema.safeParse(req.body);

    if (!parseBodyResult.success) {
      const formattedErrors = parseBodyResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors})
    }

    const updatedUser = await UserService.updateUser(parseParamsResult.data, parseBodyResult.data);
    
    return res.json(instanceToPlain(updatedUser));
  }

  async deleteUser(req: Request, res: Response): Promise<any>{
    const parseParamsResult = deleteUserParamsSchema.safeParse(req.params);

    if (!parseParamsResult.success) {
      const formattedErrors = parseParamsResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors})
    }

    await UserService.deleteUser(parseParamsResult.data);
    
    return res.status(204).send();
  }
}

export default new UserController();