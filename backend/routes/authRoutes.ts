import express from 'express';
const Router = express.Router();

import { signUpHandler, signInHandler } from '../controllers/authController';

Router.route('/signup').post(signUpHandler);
Router.route('/').post(signInHandler);

export default Router;
