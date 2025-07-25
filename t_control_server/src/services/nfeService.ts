import { NFe } from '../entities/NFe';
import { nfeRepository } from '../repositories/nfeRepository';
import { CreateNFeDTO } from '../schemas/nfeSchema';

class NFeService {
  async createNFe(data: CreateNFeDTO): Promise<NFe | null> {
    const newNFe = nfeRepository.create({
      numNfe: data.numNfe,
      authorizationKey: data.authorizationKey,
      dtEmission: data.dtEmission,
      dtEntry: data.dtEntry,
      enterprise: { id: data.enterprise },
    });

    await nfeRepository.save(newNFe);

    return newNFe;
  }
}

export default new NFeService();