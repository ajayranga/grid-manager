import express from 'express';
const Router = express.Router();

import {
  signUpHandler,
  signInHandler,
  logOutHandler,
} from '../controllers/authController';

Router.route('/signup').post(signUpHandler);
Router.route('/').post(signInHandler);
Router.route('/').get(logOutHandler);

export default Router;
