import { User } from "../entities/User";
import { userRepository } from "../repositories/userRepository";
import { AuthBodyDTO } from "../schemas/authSchema";
import bcrypt from 'bcrypt';
import { generateAccessToken } from "../utils/tokenGenerator";

class AuthService {
  async login(data: AuthBodyDTO): Promise<User | null> {
    const user = userRepository.findOneBy({ username: data.username });

    if (!user) {
      return null;
    }

    // const verifyPass = await bcrypt.compare(data.password, user.password);

    // const accessToken = generateAccessToken(user.id, user.role);
    return null
  }
}

export default new AuthService();