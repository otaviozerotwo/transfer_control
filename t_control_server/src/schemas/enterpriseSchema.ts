import * as z from 'zod/v4';

export const createEnterpriseSchema = z.object({
  cnpj: z.string().min(14, 'cnpj precisa ter 14 caracteres'),
  name: z.string().min(1, 'name é obrigatório'),
});

export const getEnterpriseSchema = z.object({
  id: z.coerce.number().int(),
});

export const updateEnterpriseParamsSchema = z.object({
  id: z.coerce.number().int(),
});

export const updateEnterpriseBodySchema = z.object({
  cnpj: z.string().min(14, 'cnpj precisa ter 14 caracteres'),
  name: z.string().min(1, 'name é obrigatório'),
  status: z.enum(['active', 'inactive']).or(z.undefined()).refine((val) => val !== undefined, {
    message: 'status é obrigatório'
  }),
});

export const deleteEnterpriseParamsSchema = z.object({
  id: z.coerce.number().int(),
});

export type CreateEnterpriseDTO = z.infer<typeof createEnterpriseSchema>;
export type GetEnterpriseByDTO = z.infer<typeof getEnterpriseSchema>;
export type UpdateEnterpriseParamsDTO = z.infer<typeof updateEnterpriseParamsSchema>;
export type UpdateEnterpriseBodyDTO = z.infer<typeof updateEnterpriseBodySchema>;
export type DeleteEnterpriseParamsDTO = z.infer<typeof deleteEnterpriseParamsSchema>;