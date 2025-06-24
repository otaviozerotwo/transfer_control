import * as z from 'zod/v4'

export const createUserSchema = z.object({
  username: z.string().min(1, 'username é obrigatório'),
  password: z.string().min(6, 'password precisa ter no mínimo 6 caracteres'),
  role: z.enum(['admin', 'user']).or(z.undefined()).refine((val) => val !== undefined, {
    message: 'role é obrigatório'
  }),
});

export const updateUserParamsSchema = z.object({
  username: z.string().min(1, 'username é obrigatório'),
});

export const updateUserBodySchema = z.object({
  username: z.string().min(1, 'username é obrigatório'),
  role: z.enum(['admin', 'user']).or(z.undefined()).refine((val) => val !== undefined, {
    message: 'role é obrigatório'
  }),
  status: z.enum(['active', 'inactive']).or(z.undefined()).refine((val) => val !== undefined, {
    message: 'status é obrigatório'
  }),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type UpdateUserParamsDTO = z.infer<typeof updateUserParamsSchema>;
export type UpdateUserBodyDTO = z.infer<typeof updateUserBodySchema>;