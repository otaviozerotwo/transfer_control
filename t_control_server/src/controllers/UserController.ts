import { Request, Response } from 'express';
import { createUserSchema, updateUserBodySchema, updateUserParamsSchema } from '../schemas/userSchema';
import UserService from '../services/userService';
import { instanceToPlain } from 'class-transformer';

class UserController {
  async createUser(req: Request, res: Response): Promise<any>{
    const parseResult = createUserSchema.safeParse(req.body);

    if (!parseResult.success) {
      const formattedErrors = parseResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors})
    }
    
    try {
      const user = await UserService.createUser(parseResult.data);
      return res.status(201).json(instanceToPlain(user));
    } catch (error) {
      console.log('Erro na criação do usuário:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<any>{
    try {
      const users = await UserService.getAllUsers();

      return res.json(users);
    } catch (error) {
      console.error('Erro ao retornar usuários:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  async getUserBy(req: Request, res: Response): Promise<any>{
    try {
      const { username } = req.params;

      const user = await UserService.getUserBy({ username });

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      return res.json(instanceToPlain(user));
    } catch (error) {
      console.error('Erro ao retornar usuário:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
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

    try {
      const updatedUser = await UserService.updateUser(parseParamsResult.data, parseBodyResult.data);

      if (!updatedUser) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      return res.json(instanceToPlain(updatedUser));
    } catch (error: any) {
      console.error('Erro ao atualizar usuário:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  // async deleteUser(req: Request, res: Response): Promise<any>{
  //   const parseParamsResult = updateUserParamsSchema.safeParse(req.params);

  //   if (!parseParamsResult.success) {
  //     const formattedErrors = parseParamsResult.error.format();
  //     return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors})
  //   }

  //   try {
  //     const deletedUser = await UserService.deleteUser(parseParamsResult.data);

  //     if (!deletedUser) {
  //       return res.status(404).json({ message: 'Usuário não encontrado.' });
  //     }

  //     return res.status(204).json({ message: 'Usuário removido com sucesso.' });
  //   } catch (error: any) {
  //     console.error('Erro ao atualizar usuário:', error);
  //     return res.status(500).json({ message: 'Erro interno do servidor.' });
  //   }
  // }
}

export default new UserController();