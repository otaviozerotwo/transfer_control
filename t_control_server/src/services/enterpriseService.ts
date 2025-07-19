import { Enterprise } from "../entities/Enterprise";
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
}

export default new EnterpriseService;