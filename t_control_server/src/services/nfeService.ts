import { Enterprise } from '../entities/Enterprise';
import { NFe } from '../entities/NFe';
import { BadRequestError, ConflictError, NotFoundError } from '../helpers/apiError';
import { enterpriseRepository } from '../repositories/enterpriseRepository';
import { nfeRepository } from '../repositories/nfeRepository';
import { CreateNFeDTO, DeleteNFeDTO, GetNFeByDTO, UpdateNFeBodyDTO, UpdateNFeParamsDTO } from '../schemas/nfeSchema';

class NFeService {
  async createNFe(data: CreateNFeDTO): Promise<NFe | null> {
    const issuer = await enterpriseRepository.findOneBy({ id: data.issuerId });

    if (!issuer) {
      throw new NotFoundError('Issuer não encontado.');
    }

    const recipient = await enterpriseRepository.findOneBy({ id: data.recipientId });

    if (!recipient) {
      throw new NotFoundError('Recipient não encontado.');
    }

    const existingNfe = await nfeRepository.findOneBy({ authorizationKey: data.authorizationKey });
    
    if (existingNfe) {
      throw new ConflictError('authorizationKey já cadastrada.');
    }

    const newNFe = nfeRepository.create({
      numNfe: data.numNfe,
      authorizationKey: data.authorizationKey,
      dtEmission: data.dtEmission,
      issuer,
      recipient,
    });

    await nfeRepository.save(newNFe);

    return newNFe;
  }

  async getAllNFe(): Promise<NFe[] | null> {
    const nfes = nfeRepository.find();

    if (!nfes) {
      throw new BadRequestError('Erro ao buscar nfes.');
    }

    return nfes;
  }

  async getNFeBy(data: GetNFeByDTO): Promise<NFe | null> {
    const nfe = await nfeRepository.findOneBy({ id: data.id });

    if (!nfe) {
      throw new NotFoundError('NFe não encontrada.');
    }

    return nfe;
  }

  async updateNFe(params: UpdateNFeParamsDTO, data: UpdateNFeBodyDTO): Promise<NFe | null> {
    const nfe = await nfeRepository.findOneBy({ id: params.id });

    if (!nfe) {
      throw new NotFoundError('NFe não encontrada.');
    }

    const existingNfe = await nfeRepository.findOneBy({ authorizationKey: data.authorizationKey });
    
    if (existingNfe && existingNfe.id !== nfe.id) {
      throw new ConflictError('authorizationKey já está vinculada a outra nota fiscal.');
    }

    const issuer = await enterpriseRepository.findOneBy({ id: data.issuerId });

    if (!issuer) {
      throw new NotFoundError('Issuer não encontado.');
    }

    const recipient = await enterpriseRepository.findOneBy({ id: data.recipientId });

    if (!recipient) {
      throw new NotFoundError('Recipient não encontado.');
    }
    
    nfe.numNfe = data.numNfe;
    nfe.authorizationKey = data.authorizationKey;
    nfe.dtEmission = data.dtEmission;
    nfe.issuer;
    nfe.recipient;

    await nfeRepository.save(nfe);

    return nfe;
  }

  async deleteNFe(params: DeleteNFeDTO): Promise<NFe | null> {
    const nfe = await nfeRepository.findOneBy({ id: params.id });

    if (!nfe) {
      throw new NotFoundError('NFe não encontrada.');
    }

    await nfeRepository.remove(nfe);

    return nfe;
  }
}

export default new NFeService();