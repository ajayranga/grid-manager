import Chart from './models/chartSchema';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import './utils/dbConnect';

dotenv.config();

const importData = async () => {
  try {
    console.log('Importing Data!!!!!!!!!!');

    await Chart.insertMany([
      { seriesName: 'Dk-1', data: [31, 40, 28, 51, 42, 109, 100] },
      { seriesName: 'Dk-2', data: [11, 32, 45, 32, 34, 52, 41] },
    ]);
    console.log('Data imported!!!!!!!!!!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit();
  }
};
importData();
