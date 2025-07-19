import { Request, Response, NextFunction } from 'express';
import { enterpriseRepository } from '../repositories/enterpriseRepository';

export const checkEnterpriseExists = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { cnpj } = req.body;
  const enterprise = await enterpriseRepository.findOneBy({ cnpj });

  if (enterprise) {
    return res.status(400).json({ message: 'cnpj já possui cadastrado.' });
  }

  next();
};