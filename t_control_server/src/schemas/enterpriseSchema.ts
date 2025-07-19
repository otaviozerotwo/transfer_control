import * as z from 'zod/v4';

export const createEnterpriseSchema = z.object({
  cnpj: z.string().min(14, 'cnpj precisa ter 14 caracteres'),
  name: z.string().min(1, 'name é obrigatório'),
});

export type CreateEnterpriseDTO = z.infer<typeof createEnterpriseSchema>;