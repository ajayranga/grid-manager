import express from 'express';
const Router = express.Router();

import { signUpHandler } from '../controllers/authController';

Router.route('/').post(signUpHandler);

export default Router;
