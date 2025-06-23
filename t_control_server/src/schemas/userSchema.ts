import { z } from 'zod/v4'

export const createUserSchema = z.object({
  username: z.string().min(1, 'username é obrigatório'), // TODO: validação não está funcionando no controller
  password: z.string().min(1, 'password é obrigatório'),
  role: z.enum(['admin', 'user'])
});

export const updateUserParamsSchema = z.object({
  username: z.string().min(1, 'username é obrigatório'),
});

export const updateUserBodySchema = z.object({
  username: z.string().min(1, 'username é obrigatório'),
  role: z.string().min(1, 'role é obrigatório'),
  status: z.number().min(1, 'role é obrigatório'), // TODO: validação não está mostrando a mensagem no console
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type UpdateUserParamsDTO = z.infer<typeof updateUserParamsSchema>;
export type UpdateUserBodyDTO = z.infer<typeof updateUserBodySchema>;