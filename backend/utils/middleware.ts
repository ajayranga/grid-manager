import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userSchema';
import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';

dotenv.config();

interface JwtPayload {
  _id: string;
}
export const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;
    if (token && token.startsWith('Bearer')) {
      try {
        const decoded = (await jwt.verify(
          token.split(' ')[1],
          process.env.JWT_SECRET as string
        )) as JwtPayload;
        req.user = await User.findById(decoded._id).select('-password');
        next();
      } catch (error) {
        res.status(401);
        throw new Error('Invalid token or token expired');
      }
    }
    if (!token) {
      res.status(401);
      throw new Error('Not authorized, no token');
    }
  }
);
