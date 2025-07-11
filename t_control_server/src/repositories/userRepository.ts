import { AppDataSource } from "../databases/data-source";
import { User } from "../entities/User";

export const userRepository = AppDataSource.getRepository(User);