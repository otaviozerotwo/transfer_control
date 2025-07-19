import { AppDataSource } from '../databases/data-source';
import { Enterprise } from '../entities/Enterprise';

export const enterpriseRepository = AppDataSource.getRepository(Enterprise);