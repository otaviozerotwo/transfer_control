import { userRepository } from "../repositories/userRepository";
import { AuthBodyDTO } from "../schemas/authSchema";
import bcrypt from 'bcrypt';
import { generateAccessToken } from "../utils/tokenGenerator";
import { NotFoundError, UnauthorizedError } from "../helpers/apiError";

class AuthService {
  async login(data: AuthBodyDTO): Promise<{ accessToken: string; loggedUser: { name: string; }}> {
    const user = await userRepository.findOneBy({ username: data.username });

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    const verifyPass = await bcrypt.compare(data.password, user.password);

    if (!verifyPass) {
      throw new UnauthorizedError('Senha incorreta.');
    }

    const token = generateAccessToken(user.username, user.role);
    const loggedUser = {
      name: user.username,
    };

    return {
      accessToken: token,
      loggedUser,
    }
  }
}

export default new AuthService();