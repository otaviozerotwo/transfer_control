import { userRepository } from "../repositories/userRepository";
import { AuthBodyDTO } from "../schemas/authSchema";
import bcrypt from 'bcrypt';
import { generateAccessToken } from "../utils/tokenGenerator";

export class UserNotFoundError extends Error {};
export class InvalidPasswordError extends Error {};

class AuthService {
  async login(data: AuthBodyDTO): Promise<any> {
    const user = await userRepository.findOneBy({ username: data.username });

    if (!user) {
      throw new UserNotFoundError('Usuário não encontrado.');
    }

    const verifyPass = await bcrypt.compare(data.password, user.password);

    if (!verifyPass) {
      throw new InvalidPasswordError('Senha incorreta.');
    }

    return generateAccessToken(user.username, user.role);
  }
}

export default new AuthService();