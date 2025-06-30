import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

class AuthController {
  async login(req: Request, res: Response): Promise<any> {}

  async refreshToken(req: Request, res: Response): Promise<any> {}
}

export default new AuthController();