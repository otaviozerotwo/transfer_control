import { z } from 'zod/v4'

export const createUserSchema = z.object({
  username: z.string().min(1, 'username não informado'),
  password: z.string().min(1, 'password não informado'),
  role: z.enum(['admin', 'user'])
});