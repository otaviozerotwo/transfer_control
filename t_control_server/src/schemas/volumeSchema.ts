import * as z from 'zod/v4';

export const createVolumeSchema = z.object({
  nrVolume: z.coerce.number(),
  nfe: z.coerce.number()
});

export const getVolumeSchema = z.object({
  id: z.coerce.number().int(),
});

export const updateVolumeParamsSchema = z.object({
  id: z.coerce.number().int(),
});

export const updateVolumeBodySchema = z.object({
  nr_volume: z.coerce.number(),
  nfe: z.coerce.number()
});

export const deleteVolumeSchema = z.object({
  id: z.coerce.number().int()
})

export type CreateVolumeDTO = z.infer<typeof createVolumeSchema>;
export type GetVolumeByDTO = z.infer<typeof getVolumeSchema>;
export type UpdateVolumeParamsDTO = z.infer<typeof updateVolumeParamsSchema>;
export type UpdateVolumeBodyDTO = z.infer<typeof updateVolumeBodySchema>;
export type DeleteVolumeDTO = z.infer<typeof deleteVolumeSchema>;