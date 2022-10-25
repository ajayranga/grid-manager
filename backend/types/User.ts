import mongoose from 'mongoose';
import IAlert from './Alert';

export default interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  alerts: IAlert[];
  role: string;
  matchPass: (arg0: string) => boolean;
}
