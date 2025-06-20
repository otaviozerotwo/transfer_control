import bcrypt from 'bcrypt';
import { userRepository } from '../repositories/userRepository';
import { User } from '../entities/User';
import { UserRole } from '../enums/UserRole';

interface CreateUserProps {
  username: string;
  password: string;
  role: User['role'];
}

export async function createUserService({ username, password, role }: CreateUserProps): Promise<any> {
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