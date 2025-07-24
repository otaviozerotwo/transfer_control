import { Request, Response, NextFunction } from 'express';
import { volumeRepository } from '../repositories/volumeRepository';

export const checkVolumeExists = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { nrVolume } = req.body;
  const volume = await volumeRepository.findOneBy({ nrVolume });

  if (volume) {
    return res.status(400).json({ message: 'nrVolume já existe' });
  }

  next();
};