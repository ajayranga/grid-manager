import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import User from '../models/userSchema';
import generateToken from '../utils/generateToken';

export const signUpHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
      res.status(400);
      throw new Error('Name, Email, Phone Number and password are required')
    } else {
      const userExist = await User.findOne({
        $or: [{ email: email }, { phone: phone }],
      });
      if (userExist) {
        res.status(400);
        throw new Error('Email or Phone Number Already registered')
      } else {
        const newUser = new User({ name, email, password, phone });
        const userData = await newUser.save();
        res.status(201).json({
          _id: userData._id,
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          token: await generateToken(userData._id),
        });
      }
    }
  }
);

export const signInHandler = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password are required')
  } else {
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
        throw new Error('Incorrect password')
      }
    } else {
      res.status(401);
      throw new Error(`No user exist with email ${email}`)
    }
  }
});

export const logOutHandler = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password are required')
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
          throw new Error('Incorrect password')
        }
      } else {
        res.status(401);
        throw new Error(`No user exist with email ${email}`)
      }
    } catch (error: any) {
      console.log(error);
      res.status(400);
      res.json(error)
      // throw new Error(error)
    }
  }
});
