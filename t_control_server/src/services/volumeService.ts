import { NFe } from "../entities/NFe";
import { Volume } from "../entities/Volume";
import { VolumeStatus } from "../enums/VolumeStatus";
import { BadRequestError, ConflictError, NotFoundError } from "../helpers/apiError";
import { volumeRepository } from "../repositories/volumeRepository";
import { CreateVolumeDTO, DeleteVolumeDTO, GetVolumeByDTO, UpdateVolumeBodyDTO, UpdateVolumeParamsDTO } from "../schemas/volumeSchema";

class VolumeService {
  async createVolume(data: CreateVolumeDTO): Promise<Volume | null> {
    const existingVolume = await volumeRepository.findOneBy({ nrVolume: data.nrVolume });

    if (existingVolume) {
      throw new ConflictError('nrVolume já existe.');
    }
    
    const newVolume = volumeRepository.create({
      nrVolume: data.nrVolume,
      nfe: { id: data.nfe }
    });

    await volumeRepository.save(newVolume);

    return newVolume;
  }

  async getAllVolume(): Promise<Volume[] | null> {
    const volumes = volumeRepository.find();

    if (!volumes) {
      throw new BadRequestError('Erro ao buscar volumes.');
    }

    return volumes;
  }

  async getVolumeBy(data: GetVolumeByDTO): Promise<Volume | null> {
    const volume = await volumeRepository
      .createQueryBuilder('volume')
      .leftJoinAndSelect('volume.nfe', 'nfe')
      .leftJoinAndSelect('nfe.issuer', 'issuer')
      .leftJoinAndSelect('nfe.recipient', 'recipient')
      .select([
        'volume.nrVolume AS volume',
        'nfe.numNfe AS nfe',
        'issuer.name AS issuer',
        'recipient.name AS recipient',
        'volume.status As status'
      ])
      .where('volume.id = :id', { id: data.id })
      .getRawOne();

    if (!volume) {
      throw new NotFoundError('Volume não encontrado.');
    }

    return volume;
  }

  async updateVolume(params: UpdateVolumeParamsDTO, data: UpdateVolumeBodyDTO): Promise<Volume | null> {
    const volume = await volumeRepository.findOneBy({ id: params.id });

    if (!volume) {
      throw new NotFoundError('Volume não encontrado.');
    }

    volume.nrVolume = data.nr_volume;
    volume.nfe = { id: data.nfe } as NFe;

    await volumeRepository.save(volume);

    return volume;
  }

  async deleteVolume(params: DeleteVolumeDTO): Promise<Volume | null> {
    const volume = await volumeRepository.findOneBy({ id: params.id });

    if (!volume) {
      throw new NotFoundError('Volume não encontrado.');
    }

    await volumeRepository.remove(volume);

    return volume;
  }
}

export default new VolumeService();