import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import Chart from '../models/chartSchema';

export const getChartData = asyncHandler(
  async (req: Request, res: Response) => {
    const chartData = await Chart.find();
    res.status(201).json({ chartData });
  }
);
