import bcrypt from 'bcrypt';
import { userRepository } from '../repositories/userRepository';
import { UserRole } from '../enums/UserRole';

interface CreateUserProps {
  username: string;
  password: string;
  role: string;
}

interface GetUserByProps {
  username: string;
}

export class UserService {
  async createUser({ username, password, role }: CreateUserProps): Promise<any>{
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
      username,
      password: hashedPassword,
      role: role as UserRole
    });

    await userRepository.save(newUser);

    const { password: _, ...user } = newUser;
    return user;
  }

  async getAllUsers(): Promise<any>{
    const users = userRepository.find({
      select: ['username', 'role', 'createdAt']
    });
    return users;
  }

  async getUserBy({ username }: GetUserByProps): Promise<any>{
    const user = await userRepository.findOneBy({ username });

    return user;
  }
}