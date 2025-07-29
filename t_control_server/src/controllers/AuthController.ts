import { Request, Response } from 'express';
import { authBodySchema } from '../schemas/authSchema';
import AuthService from '../services/authService';

class AuthController {
  async login(req: Request, res: Response): Promise<any> {
    const parseBodyResult = authBodySchema.safeParse(req.body);

    if (!parseBodyResult.success) {
      const formattedErrors = parseBodyResult.error.format();
      return res.status(400).json({ message: 'Erro de validação', errors: formattedErrors })
    }

    const loginData = await AuthService.login(parseBodyResult.data);

    console.log('Usuário logado:', loginData.loggedUser);

    return res.json(loginData);
  }

  async refreshToken(req: Request, res: Response): Promise<any> {}
}

export default new AuthController();