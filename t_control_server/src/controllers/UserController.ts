import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository';
import bcrypt from 'bcrypt';

export class UserController {
  async createUser(req: Request, res: Response): Promise<any>{
    try {
      const { username, password, role } = req.body;

      if (!username) {
        return res.status(400).json({ message: 'username não informado.' });
      } else if (!password) {
        return res.status(400).json({ message: 'password não informado.'})
      }

      const userExists = await userRepository.findOneBy({ username });

      if (userExists) {
        return res.status(400).json({ message: 'username já possui cadastro.' });
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const newUser = userRepository.create({
        username,
        password: hashPassword,
        role
      });

      await userRepository.save(newUser);

      const { password: _, ...user } = newUser;

      return res.status(201).json(user);
    } catch (error) {
      console.log('Erro na criação do usuário:', error);
      
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }
}