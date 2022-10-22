import express from 'express';
const Router = express.Router();

import { protect } from '../utils/middleware';
import {
  getAllAlertsHandler,
  addAlertHandler,
  deleteAlertHandler,
} from '../controllers/alertController';

Router.route('/').get(protect, getAllAlertsHandler);
Router.route('/').post(protect, addAlertHandler);
Router.route('/:id').delete(protect, deleteAlertHandler);

export default Router;
