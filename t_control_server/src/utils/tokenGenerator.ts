import jwt from 'jsonwebtoken';

const SECRET_ACCESS_TOKEN = process.env.JWT_SECRET;

export const generateAccessToken = (username: string, role: string) => {
  if (!SECRET_ACCESS_TOKEN) throw new Error('JWT_SECRET não definido.');
  return jwt.sign(
    { username, role },
    SECRET_ACCESS_TOKEN,
    { expiresIn: '5m' }
  );
};