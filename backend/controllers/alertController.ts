import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Alert from '../models/alertSchema';

import User from '../models/userSchema';
import generateToken from '../utils/generateToken';

export const getAllAlertsHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const allAlerts = await Alert.find();
      res.status(201).json(allAlerts);
    } catch (error: any) {
      res.status(404);
      throw new Error(error.message);
    }
  }
);

export const addAlertHandler = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password are required');
  } else {
    try {
      const user = await User.findOne({ email });
      if (user) {
        if (await user.matchPass(password)) {
          res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            token: await generateToken(user._id),
          });
        } else {
          res.status(401);
          throw new Error('Incorrect password');
        }
      } else {
        res.status(401);
        throw new Error(`No user exist with email ${email}`);
      }
    } catch (error: any) {
      console.log(error);
      res.status(400);
      throw new Error(error);
    }
  }
});

export const deleteAlertHandler = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password are required');
  } else {
    try {
      const user = await User.findOne({ email });
      if (user) {
        if (await user.matchPass(password)) {
          res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            token: await generateToken(user._id),
          });
        } else {
          res.status(401);
          throw new Error('Incorrect password');
        }
      } else {
        res.status(401);
        throw new Error(`No user exist with email ${email}`);
      }
    } catch (error: any) {
      console.log(error);
      res.status(400);
      throw new Error(error);
    }
  }
});
