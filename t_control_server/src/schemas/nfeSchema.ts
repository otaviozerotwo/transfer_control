import * as z from 'zod/v4';

export const createNFeSchema = z.object({
  numNfe: z.coerce.number(),
  authorizationKey: z.string().length(44, 'authorizationKey deve ter 44 caracteres'),
  dtEmission: z.coerce.date(),
  issuerId: z.uuid('issuerId deve ser um UUID válido'),
  recipientId: z.uuid('recipientId deve ser um UUID válido'),
});

export const getNFeSchema = z.object({
  id: z.uuid(),
});

export const updateNFeParamsSchema = z.object({
  id: z.uuid(),
});

export const updateNFeBodySchema = z.object({
  numNfe: z.coerce.number(),
  authorizationKey: z.string().length(44, 'authorizationKey deve ter 44 caracteres'),
  dtEmission: z.coerce.date(),
  issuerId: z.uuid('issuerId deve ser um UUID válido'),
  recipientId: z.uuid('recipientId deve ser um UUID válido'),
});

export const deleteNFeSchema = z.object({
  id: z.uuid(),
});

export type CreateNFeDTO = z.infer<typeof createNFeSchema>;
export type GetNFeByDTO = z.infer<typeof getNFeSchema>;
export type UpdateNFeParamsDTO = z.infer<typeof updateNFeParamsSchema>;
export type UpdateNFeBodyDTO = z.infer<typeof updateNFeBodySchema>;
export type DeleteNFeDTO = z.infer<typeof deleteNFeSchema>;