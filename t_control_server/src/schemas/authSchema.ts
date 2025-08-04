import * as z from 'zod/v4';

export const authBodySchema = z.object({
  username: z.string().trim().min(1, 'username é obrigatório'),
  password: z.string().trim().min(1, 'password é obrigatório.'),
});

export type AuthBodyDTO = z.infer<typeof authBodySchema>;