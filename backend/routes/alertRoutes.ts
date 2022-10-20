import express from 'express';
const Router = express.Router();

import {
  getAllAlertsHandler,
  addAlertHandler,
  deleteAlertHandler,
} from '../controllers/alertController';

Router.route('/').get(getAllAlertsHandler);
Router.route('/').post(addAlertHandler);
Router.route('/:id').delete(deleteAlertHandler);

export default Router;
