import { Request, Response } from 'express';
import { createEnterpriseSchema } from '../schemas/enterpriseSchema';
import enterpriseService from '../services/enterpriseService';

class EnterpriseController {
  async createEnterprise(req: Request, res: Response): Promise<any> {
    const parseResult = createEnterpriseSchema.safeParse(req.body);

    if (!parseResult.success) {
      const formattedErrors = parseResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    const enterprise = await enterpriseService.createEnterprise(parseResult.data);

    return res.status(201).json(enterprise);
  }

  async getAllEnterprises(req: Request, res: Response): Promise<any> {
    const enterprises = await enterpriseService.getAllEnterprises();

    return res.json(enterprises);
  }

  async getEnterpriseBy(req: Request, res: Response): Promise<any> {}

  async updateEnterprise(req: Request, res: Response): Promise<any> {}

  async deleteEnterprise(req: Request, res: Response): Promise<any> {}
}

export default new EnterpriseController();