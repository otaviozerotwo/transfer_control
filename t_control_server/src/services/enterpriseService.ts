import { Enterprise } from "../entities/Enterprise";
import { BadRequestError, NotFoundError } from "../helpers/apiError";
import { enterpriseRepository } from "../repositories/enterpriseRepository";
import { CreateEnterpriseDTO, GetEnterpriseByDTO } from "../schemas/enterpriseSchema";

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

  async getEnterpriseBy(data: GetEnterpriseByDTO): Promise<Enterprise | null> {
    const enterprise = await enterpriseRepository.findOneBy({ id: data.id });

    if (!enterprise) {
      throw new NotFoundError('Empresa não encontrada.');
    }

    return enterprise;
  }
}

export default new EnterpriseService;