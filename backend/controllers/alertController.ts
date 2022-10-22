import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Alert from '../models/alertSchema';
import User from '../models/userSchema';
import generateToken from '../utils/generateToken';

export const addAlertHandler = asyncHandler(async (req, res) => {
  const { name, phone, email, criteria, value, alertDays, priceSignal } =
    req.body;
  if (
    !name ||
    !phone ||
    !email ||
    !criteria ||
    !value ||
    !alertDays ||
    !priceSignal
  ) {
    res.status(400);
    throw new Error('Enter All Fields');
  } else {
    const newAlert = new Alert({
      user: req.user?._id,
      name,
      phone,
      email,
      criteria,
      value,
      alertDays,
      priceSignal,
    });
    await newAlert.save();
    res.status(200);
    res.json({ newAlert });
  }
});

export const getAllAlertsHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const pageNum: any = req.query.pageNum;
    const allAlerts = await Alert.find({ user: req.user?._id })
      .skip((parseInt(pageNum) - 1) * 10)
      .limit(10);
    const totalAlerts = await Alert.find({ user: req.user?._id }).count();
    res.status(201).json({ allAlerts, totalAlerts });
  }
);

export const deleteAlertHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const pageNum: any = req.query.pageNum;
  if (!id || id === '') throw new Error('No Alert passed to delete');
  await Alert.deleteOne({ _id: id });
  const allAlerts = await Alert.find({ user: req.user?._id })
    .skip((parseInt(pageNum) - 1) * 10)
    .limit(10);
  const totalAlerts = await Alert.find({ user: req.user?._id }).count();
  res.status(201).json({ allAlerts, totalAlerts });
});
