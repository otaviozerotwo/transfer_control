import * as z from 'zod/v4';

export const createVolumeSchema = z.object({
  nrVolume: z.coerce.number(),
  nfe: z.uuid()
});

export const getVolumeSchema = z.object({
  id: z.uuid(),
});

export const getVolumeBySchema = z.object({
  nrVolume: z.coerce.number(),
})

export const updateVolumeParamsSchema = z.object({
  id: z.uuid(),
});

export const updateVolumeBodySchema = z.object({
  nrVolume: z.coerce.number(),
  nfe: z.uuid(),
});

export const deleteVolumeSchema = z.object({
  id: z.uuid(),
})

export type CreateVolumeDTO = z.infer<typeof createVolumeSchema>;
export type GetVolumeDTO = z.infer<typeof getVolumeSchema>;
export type GetVolumeByDTO = z.infer<typeof getVolumeBySchema>;
export type UpdateVolumeParamsDTO = z.infer<typeof updateVolumeParamsSchema>;
export type UpdateVolumeBodyDTO = z.infer<typeof updateVolumeBodySchema>;
export type DeleteVolumeDTO = z.infer<typeof deleteVolumeSchema>;