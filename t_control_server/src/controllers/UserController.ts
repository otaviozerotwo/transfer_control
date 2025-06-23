import { Request, Response } from 'express';
import { CreateUserDTO, UpdateUserBodyDTO, UpdateUserParamsDTO } from '../schemas/userSchema';
import UserService from '../services/userService';
import { instanceToPlain } from 'class-transformer';

class UserController {
  async createUser(req: Request, res: Response): Promise<any>{
    const body = req.body as CreateUserDTO;
    try {
      const user = await UserService.createUser(body);
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
    const params = req.params as UpdateUserParamsDTO;
    const body = req.body as UpdateUserBodyDTO;
    try {
      const updatedUser = await UserService.updateUser(params, body);

      if (!updatedUser) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      return res.json(instanceToPlain(updatedUser));
    } catch (error: any) {
      console.error('Erro ao atualizar usuário:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<any>{
    
  }
}

export default new UserController();