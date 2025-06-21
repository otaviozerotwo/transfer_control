import { Request, Response, NextFunction } from 'express';
import { userRepository } from '../repositories/userRepository';

export const checkUserExists = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { username } = req.body;
  const user = await userRepository.findOneBy({ username });

  if (user) {
    return res.status(400).json({ message: 'username já possui cadastrado.' });
  }

  next();
};