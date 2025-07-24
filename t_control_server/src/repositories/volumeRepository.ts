import { AppDataSource } from '../databases/data-source';
import { Volume } from '../entities/Volume';

export const volumeRepository = AppDataSource.getRepository(Volume);