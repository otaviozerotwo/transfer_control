import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../helpers/apiError';

export const errorHandler = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : 'Erro interno do servidor.';

  console.error('Erro no middleware errorHander:', statusCode, message);
  res.status(statusCode).json({ message });
}