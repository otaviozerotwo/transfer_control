import { Request, Response } from 'express';
import { createNFeSchema } from '../schemas/nfeSchema';
import nfeService from '../services/nfeService';

class NFeController {
  async createNFe(req: Request, res: Response): Promise<any> {
    const parseResult = createNFeSchema.safeParse(req.body);

    if (!parseResult.success) {
      const formattedErrors = parseResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    const nfe = await nfeService.createNFe(parseResult.data);

    return res.status(201).json(nfe);
  }
}

export default new NFeController();