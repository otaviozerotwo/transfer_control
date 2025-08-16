import * as z from 'zod/v4';

export const createEnterpriseSchema = z.object({
  cnpj: z.string().length(14, 'cnpj precisa ter 14 caracteres'),
  name: z.string().min(1, 'name é obrigatório'),
  address: z.string().min(1, 'address é obrigatório'),
  addressNumber: z.coerce.number().min(1, 'addressNumber é obrigatório'),
  neighborhood: z.string().min(1, 'neighborhood é obrigatório'),
  cep: z.string().min(1, 'cep é obrigatório'),
  addressLatitude: z.coerce.number(),
  addressLongitude: z.coerce.number()
});

export const getEnterpriseSchema = z.object({
  id: z.uuid(),
});

export const updateEnterpriseParamsSchema = z.object({
  id: z.uuid(),
});

export const updateEnterpriseBodySchema = z.object({
  cnpj: z.string().length(14, 'cnpj precisa ter 14 caracteres'),
  name: z.string().min(1, 'name é obrigatório'),
  address: z.string().min(1, 'address é obrigatório'),
  addressNumber: z.coerce.number().min(1, 'addressNumber é obrigatório'),
  neighborhood: z.string().min(1, 'neighborhood é obrigatório'),
  cep: z.string().min(1, 'cep é obrigatório'),
  addressLatitude: z.coerce.number(),
  addressLongitude: z.coerce.number()
});

export const deleteEnterpriseParamsSchema = z.object({
  id: z.uuid(),
});

export type CreateEnterpriseDTO = z.infer<typeof createEnterpriseSchema>;
export type GetEnterpriseByDTO = z.infer<typeof getEnterpriseSchema>;
export type UpdateEnterpriseParamsDTO = z.infer<typeof updateEnterpriseParamsSchema>;
export type UpdateEnterpriseBodyDTO = z.infer<typeof updateEnterpriseBodySchema>;
export type DeleteEnterpriseParamsDTO = z.infer<typeof deleteEnterpriseParamsSchema>;