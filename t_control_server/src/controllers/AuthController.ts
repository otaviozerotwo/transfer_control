import { Request, Response } from 'express';
import { authBodySchema } from '../schemas/authSchema';
import AuthService, { InvalidPasswordError, UserNotFoundError } from '../services/authService';

class AuthController {
  async login(req: Request, res: Response): Promise<any> {
    const parseBodyResult = authBodySchema.safeParse(req.body);

    if (!parseBodyResult.success) {
      const formattedErrors = parseBodyResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors})
    }

    try {
      const accessToken = await AuthService.login(parseBodyResult.data);

      return res.json({ accessToken });
    } catch (error: any) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ message: error.message });
      } else if (error instanceof InvalidPasswordError) {
        return res.status(401).json({ message: error.message });
      }

      console.error('Erro inesperado no login:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  async refreshToken(req: Request, res: Response): Promise<any> {}
}

export default new AuthController();