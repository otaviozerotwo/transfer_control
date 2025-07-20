import { Request, Response } from 'express';
import { createEnterpriseSchema, deleteEnterpriseParamsSchema, getEnterpriseSchema, updateEnterpriseBodySchema, updateEnterpriseParamsSchema } from '../schemas/enterpriseSchema';
import EnterpriseService from '../services/enterpriseService';

class EnterpriseController {
  async createEnterprise(req: Request, res: Response): Promise<any> {
    const parseResult = createEnterpriseSchema.safeParse(req.body);

    if (!parseResult.success) {
      const formattedErrors = parseResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    const enterprise = await EnterpriseService.createEnterprise(parseResult.data);

    return res.status(201).json(enterprise);
  }

  async getAllEnterprises(req: Request, res: Response): Promise<any> {
    const enterprises = await EnterpriseService.getAllEnterprises();

    return res.json(enterprises);
  }

  async getEnterpriseBy(req: Request, res: Response): Promise<any> {
    const parseParamsResult = getEnterpriseSchema.safeParse(req.params);

    if (!parseParamsResult.success) {
      const formattedErrors = parseParamsResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    const enterprise = await EnterpriseService.getEnterpriseBy(parseParamsResult.data);

    return res.json(enterprise);
  }

  async updateEnterprise(req: Request, res: Response): Promise<any> {
    const parseParamsResult = updateEnterpriseParamsSchema.safeParse(req.params);

    if (!parseParamsResult.success) {
      const formattedErrors = parseParamsResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    const parseBodyResult = updateEnterpriseBodySchema.safeParse(req.body);

    if (!parseBodyResult.success) {
      const formattedErrors = parseBodyResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    const updatedEnterprise = await EnterpriseService.updateEnterprise(parseParamsResult.data, parseBodyResult.data);

    return res.json(updatedEnterprise);
  }

  async deleteEnterprise(req: Request, res: Response): Promise<any> {
    const parseParamsResult = deleteEnterpriseParamsSchema.safeParse(req.params);

    if (!parseParamsResult.success) {
      const formattedErrors = parseParamsResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    await EnterpriseService.deleteEnterprise(parseParamsResult.data);

    return res.status(204).send();
  }
}

export default new EnterpriseController();