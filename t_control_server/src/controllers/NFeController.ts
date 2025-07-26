import { Request, Response } from 'express';
import { createNFeSchema, getNFeSchema, updateNFeBodySchema, updateNFeParamsSchema } from '../schemas/nfeSchema';
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

  async getAllNFe(req: Request, res: Response): Promise<any> {
    const nfes = await nfeService.getAllNFe();

    return res.json(nfes);
  }

  async getNFeBy(req: Request, res: Response): Promise<any> {
    const parseParamsResult = getNFeSchema.safeParse(req.params);

    if (!parseParamsResult.success) {
      const formattedErrors = parseParamsResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    const nfe = await nfeService.getNFeBy(parseParamsResult.data);

    return res.json(nfe);
  }

  async updateNfe(req: Request, res: Response): Promise<any> {
    const parseParamsResult = updateNFeParamsSchema.safeParse(req.params);

    if (!parseParamsResult.success) {
      const formattedErrors = parseParamsResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    const parseBodyResult = updateNFeBodySchema.safeParse(req.body);

    if (!parseBodyResult.success) {
      const formattedErrors = parseBodyResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    const updatedNFe = await nfeService.updateNFe(parseParamsResult.data, parseBodyResult.data);

    return res.json(updatedNFe);
  }
}

export default new NFeController();