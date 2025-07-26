import * as z from 'zod/v4';

export const createNFeSchema = z.object({
  numNfe: z.coerce.number(),
  authorizationKey: z.string().min(44, 'authorizationKey deve ter 44 caracteres'),
  dtEmission: z.coerce.date(),
  dtEntry: z.coerce.date(),
  enterprise: z.coerce.number()
});

export const getNFeSchema = z.object({
  id: z.coerce.number().int(),
});

export const updateNFeParamsSchema = z.object({
  id: z.coerce.number().int(),
});

export const updateNFeBodySchema = z.object({
  numNfe: z.coerce.number(),
  authorizationKey: z.string().min(44, 'authorizationKey deve ter 44 caracteres'),
  dtEmission: z.coerce.date(),
  dtEntry: z.coerce.date(),
  enterprise: z.coerce.number()
});

export const deleteNFeSchema = z.object({
  id: z.coerce.number().int()
});

export type CreateNFeDTO = z.infer<typeof createNFeSchema>;
export type GetNFeByDTO = z.infer<typeof getNFeSchema>;
export type UpdateNFeParamsDTO = z.infer<typeof updateNFeParamsSchema>;
export type UpdateNFeBodyDTO = z.infer<typeof updateNFeBodySchema>;
export type DeleteNFeDTO = z.infer<typeof deleteNFeSchema>;