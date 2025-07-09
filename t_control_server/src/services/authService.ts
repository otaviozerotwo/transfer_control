import { userRepository } from "../repositories/userRepository";
import { AuthBodyDTO } from "../schemas/authSchema";
import bcrypt from 'bcrypt';
import { generateAccessToken } from "../utils/tokenGenerator";
import { NotFoundError, UnauthorizedError } from "../helpers/apiError";

class AuthService {
  async login(data: AuthBodyDTO): Promise<string> {
    const user = await userRepository.findOneBy({ username: data.username });

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    const verifyPass = await bcrypt.compare(data.password, user.password);

    if (!verifyPass) {
      throw new UnauthorizedError('Senha incorreta.');
    }

    return generateAccessToken(user.username, user.role);
  }
}

export default new AuthService();