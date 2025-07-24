import { Request, Response } from 'express';
import { createVolumeSchema, deleteVolumeSchema, getVolumeSchema, updateVolumeBodySchema, updateVolumeParamsSchema } from '../schemas/volumeSchema';
import VolumeService from '../services/volumeService';

class VolumeController {
  async createVolume(req: Request, res: Response): Promise<any> {
    const parseResult = createVolumeSchema.safeParse(req.body);

    if (!parseResult.success) {
      const formattedErrors = parseResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    const volume = await VolumeService.createVolume(parseResult.data);

    return res.status(201).json(volume);
  }

  async getAllVolumes(req: Request, res: Response): Promise<any> {
    const volumes = await VolumeService.getAllVolume();

    return res.json(volumes);
  }

  async getVolumeBy(req: Request, res: Response): Promise<any> {
    const parseParamsResult = getVolumeSchema.safeParse(req.params);

    if (!parseParamsResult.success) {
      const formattedErrors = parseParamsResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    const volume = await VolumeService.getVolumeBy(parseParamsResult.data);

    return res.json(volume);
  }

  async updateVolume(req: Request, res: Response): Promise<any> {
    const parseParamsResult = updateVolumeParamsSchema.safeParse(req.params);

    if (!parseParamsResult.success) {
      const formattedErrors = parseParamsResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    const parseBodyResult = updateVolumeBodySchema.safeParse(req.body);

    if (!parseBodyResult.success) {
      const formattedErrors = parseBodyResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    const updatedVolume = await VolumeService.updateVolume(parseParamsResult.data, parseBodyResult.data);

    return res.json(updatedVolume);
  }

  async deleteVolume(req: Request, res: Response): Promise<any> {
    const parseParamsResult = deleteVolumeSchema.safeParse(req.params);

    if (!parseParamsResult.success) {
      const formattedErrors = parseParamsResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors });
    }

    await VolumeService.deleteVolume(parseParamsResult.data);

    return res.status(204).send();
  }
}

export default new VolumeController();