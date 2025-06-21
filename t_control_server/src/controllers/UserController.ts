import { Request, Response } from 'express';
import { createUserSchema } from '../schemas/userSchema';
import { UserService } from '../services/userService';

export class UserController {
  async createUser(req: Request, res: Response): Promise<any>{
    try {
      const validation = createUserSchema.safeParse(req.body);

      if (!validation.success) {
        const errorMessage = validation.error.issues[0].message;
        return res.status(400).json({ message: errorMessage });
      } 

      const user = await new UserService().createUser(validation.data);
      return res.status(201).json(user);
    } catch (error) {
      console.log('Erro na criação do usuário:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<any>{
    try {
      const users = await new UserService().getAllUsers();

      return res.json(users);
    } catch (error) {
      console.error('Erro ao retornar usuários:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }
}