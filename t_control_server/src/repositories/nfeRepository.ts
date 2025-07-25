import { AppDataSource } from '../databases/data-source';
import { NFe } from '../entities/NFe';

export const nfeRepository = AppDataSource.getRepository(NFe);