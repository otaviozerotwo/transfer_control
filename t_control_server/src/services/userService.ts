import bcrypt from 'bcrypt';
import { userRepository } from '../repositories/userRepository';
import { UserRole } from '../enums/UserRole';
import { User } from '../entities/User';
import { CreateUserDTO, DeleteUserParamsDTO, UpdateUserBodyDTO, UpdateUserParamsDTO } from '../schemas/userSchema';
import { UserStatus } from '../enums/UserStatus';

interface GetUserByProps {
  username: string;
}

class UserService {
  async createUser(data: CreateUserDTO): Promise<User | null>{
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = userRepository.create({
      username: data.username,
      password: hashedPassword,
      role: data.role as UserRole
    });

    await userRepository.save(newUser);

    return newUser;
  }

  async getAllUsers(): Promise<User[] | null>{
    const users = userRepository.find({
      select: ['username', 'role', 'createdAt']
    });
    return users;
  }

  async getUserBy({ username }: GetUserByProps): Promise<User | null>{
    const user = await userRepository.findOneBy({ username });

    return user;
  }

  async updateUser(params: UpdateUserParamsDTO, data: UpdateUserBodyDTO): Promise<User | null>{
    const user = await userRepository.findOneBy({ username: params.username });

    if (!user) {
      return null;
    }

    user.username = data.username;
    user.role = data.role as UserRole;
    user.status = data.status as UserStatus;

    await userRepository.save(user);
    
    return user;
  }

  async deleteUser(params: DeleteUserParamsDTO) {
    const user = await userRepository.findOneBy({ username: params.username });

    if (!user) {
      return null;
    }

    await userRepository.remove(user);
  }
}

export default new UserService();