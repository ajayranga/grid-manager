import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import cors from 'cors';
import logger from 'morgan';
import * as dotenv from 'dotenv';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import expressRateLimit from 'express-rate-limit';
import './utils/dbConnect';

import authRoutes from './routes/authRoutes';
import alertRoutes from './routes/alertRoutes';
import chartRoutes from './routes/chartRoutes';

const limiter = expressRateLimit({ windowMs: 3 * 60 * 1000, max: 50 });

const app: Express = express();
app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(logger('dev'));
app.use(limiter);
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth/', authRoutes);
app.use('/api/alert/', alertRoutes);
app.use('/api/chart/', chartRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(path.resolve(), 'client', 'dist')));
  app.get('*', (req: Request, res: Response) =>
    res.sendFile(path.join(path.resolve(), 'client', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req: Request, res: Response) => res.send('API is running'));
}

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found -${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  console.log(err);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

export default app;
