import { Enterprise } from '../entities/Enterprise';
import { EnterpriseStatus } from '../enums/EnterpriseStatus';
import { BadRequestError, ConflictError, NotFoundError } from '../helpers/apiError';
import { enterpriseRepository } from '../repositories/enterpriseRepository';
import { CreateEnterpriseDTO, DeleteEnterpriseParamsDTO, GetEnterpriseByDTO, UpdateEnterpriseBodyDTO, UpdateEnterpriseParamsDTO } from '../schemas/enterpriseSchema';

class EnterpriseService {
  async createEnterprise(data: CreateEnterpriseDTO): Promise<Enterprise | null> {
    const existingEnterprise = await enterpriseRepository.findOneBy({ cnpj: data.cnpj });

    if (existingEnterprise) {
      throw new ConflictError('cnpj já possui cadastrado.');
    }
    
    const newEnterprise = enterpriseRepository.create({
      cnpj: data.cnpj,
      name: data.name,
      address: data.address,
      addressNumber: data.addressNumber,
      neighborhood: data.neighborhood,
      cep: data.cep,
      addressLatitude: data.addressLatitude,
      addressLongitude: data.addressLongitude
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

  async updateEnterprise(params: UpdateEnterpriseParamsDTO, data: UpdateEnterpriseBodyDTO): Promise<Enterprise | null> {
    const enterprise = await enterpriseRepository.findOneBy({ id: params.id });

    if (!enterprise) {
      throw new NotFoundError('Empresa não encontrada.');
    }

    enterprise.cnpj = data.cnpj;
    enterprise.name = data.name;
    enterprise.address = data.address,
    enterprise.addressNumber = data.addressNumber,
    enterprise.neighborhood = data.neighborhood,
    enterprise.cep = data.cep,
    enterprise.addressLatitude = data.addressLatitude,
    enterprise.addressLongitude = data.addressLongitude

    await enterpriseRepository.save(enterprise);

    return enterprise;
  }

  async deleteEnterprise(params: DeleteEnterpriseParamsDTO): Promise<Enterprise | null> {
    const enterprise = await enterpriseRepository.findOneBy({ id: params.id });

    if (!enterprise) {
      throw new NotFoundError('Empresa não encontrada.');
    }

    await enterpriseRepository.remove(enterprise);

    return enterprise;
  }
}

export default new EnterpriseService;