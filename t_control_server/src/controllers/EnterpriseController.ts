import { Request, Response } from 'express';
import { createEnterpriseSchema, getEnterpriseSchema } from '../schemas/enterpriseSchema';
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

  async updateEnterprise(req: Request, res: Response): Promise<any> {}

  async deleteEnterprise(req: Request, res: Response): Promise<any> {}
}

export default new EnterpriseController();