import { Secret } from 'jsonwebtoken';
import IUser from './User';

declare global {
  namespace Express {
    interface Request {
      user?: IUser | null;
    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: Secret;
    }
  }
}
