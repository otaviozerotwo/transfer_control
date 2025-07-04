import { Request, Response } from 'express';
import { authBodySchema } from '../schemas/authSchema';
import AuthService from '../services/authService';

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
    } catch (error) {
      console.error('Erro no login:', error);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  async refreshToken(req: Request, res: Response): Promise<any> {}
}

export default new AuthController();