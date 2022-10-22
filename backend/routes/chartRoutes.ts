import express from 'express';
const Router = express.Router();
import { getChartData } from '../controllers/chartController';

Router.route('/').get(getChartData);

export default Router;
