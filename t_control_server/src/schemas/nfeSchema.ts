import * as z from 'zod/v4';

export const createNFeSchema = z.object({
  numNfe: z.coerce.number(),
  authorizationKey: z.string().min(44, 'authorizationKey deve ter 44 caracteres'),
  dtEmission: z.coerce.date(),
  dtEntry: z.coerce.date(),
  enterprise: z.coerce.number()
});

export type CreateNFeDTO = z.infer<typeof createNFeSchema>;