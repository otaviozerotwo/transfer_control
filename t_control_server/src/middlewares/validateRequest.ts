import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod/v4';

type Schemas = {
  body?: ZodType;
  params?: ZodType;
  query?: ZodType;
};

export const validateRequest = (schemas: Schemas) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schemas.params) {
        schemas.params.parse(req.params);
      }

      if (schemas.body) {
        schemas.body.parse(req.body);
      }

      if (schemas.query) {
        schemas.query.parse(req.query);
      }

      next();
    } catch (error: any) {
      console.error('Erro de validação:', error);

      res.status(500).json({ message: 'Erro interno do servidor.' });
      return;
    }
  };
};