import { userRepository } from "../repositories/userRepository";
import { AuthBodyDTO } from "../schemas/authSchema";
import bcrypt from 'bcrypt';
import { generateAccessToken } from "../utils/tokenGenerator";

class AuthService {
  async login(data: AuthBodyDTO): Promise<any> {
    const user = await userRepository.findOneBy({ username: data.username });

    if (!user) {
      return null;
    }

    const verifyPass = await bcrypt.compare(data.password, user.password);

    if (!verifyPass) {
      return null;
    }

    const accessToken = generateAccessToken(user.username, user.role);
    return accessToken;
  }
}

export default new AuthService();