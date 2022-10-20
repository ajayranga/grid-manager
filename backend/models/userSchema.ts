import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import IUser from '../types/User';
import { alertSchema } from './alertSchema';

export const userSchema = new mongoose.Schema<IUser>(
  {
    userName: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Name is required'],
      minLength: 4,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      trim: true,
      minlength: 8,
      required: [true, 'Password is required'],
    },
    phone: {
      type: String,
      unique: true,
      trim: true,
      length: 10,
      required: [true, 'Phone Number is required'],
    },
    alerts: [alertSchema],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
userSchema.methods.matchPass = async function (pass: string) {
  return await bcrypt.compare(pass, this.password);
};
userSchema.pre('save', async function (next) {
  if (this.isModified('password'))
    this.password = await bcrypt.hash(this.password, 10);
  next();
});
const User = mongoose.model('User', userSchema);

export default User;
