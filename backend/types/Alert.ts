import mongoose, { Schema } from 'mongoose';
import IUser from './User';

export default interface IAlert {
  user: typeof Schema.Types.ObjectId;
  name: string;
  criteria: string;
  value: number;
  alertDays: string[];
  priceSignal: string;
  email: string;
  phone: string;
}
