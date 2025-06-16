import * as path from 'path';
import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const isProduction = process.env.NODE_ENV === 'production';

const PORT = process.env.DB_INTERNAL_PORT ? parseInt(process.env.DB_INTERNAL_PORT, 10) : undefined;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_INTERNAL_HOST,
  port: PORT,
  username: process.env.DB_INTERNAL_USER,
  password: process.env.DB_INTERNAL_PASS,
  database: process.env.DB_INTERNAL_NAME,
  logging: isProduction ? false : true,
  synchronize: false,
  entities: [isProduction ? './dist/entities/*.js' : './src/entities/*.ts'],
  migrations: [isProduction ? './dist/migrations/*.js' : './src/migrations/*.ts'],
});