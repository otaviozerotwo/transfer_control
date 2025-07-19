import { Enterprise } from "../entities/Enterprise";
import { BadRequestError } from "../helpers/apiError";
import { enterpriseRepository } from "../repositories/enterpriseRepository";
import { CreateEnterpriseDTO } from "../schemas/enterpriseSchema";

class EnterpriseService {
  async createEnterprise(data: CreateEnterpriseDTO): Promise<Enterprise | null> {
    const newEnterprise = enterpriseRepository.create({
      cnpj: data.cnpj,
      name: data.name
    });

    await enterpriseRepository.save(newEnterprise);

    return newEnterprise;
  }

  async getAllEnterprises(): Promise<Enterprise[] | null> {
    const enterprises = enterpriseRepository.find();

    if (!enterprises) {
      throw new BadRequestError('Erro ao buscar empresas.');
    }

    return enterprises;
  }
}

export default new EnterpriseService;