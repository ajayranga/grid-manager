import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import IUser from '../types/User';
import { alertSchema } from './alertSchema';

export const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
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
      validate: [
        (email: string) => {
          var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return re.test(email);
        },
        'Please enter a valid email',
      ],
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
      validate: [
        (phone: string) => {
          var re = /^[0-9]{10}$/;
          return re.test(phone);
        },
        'Please enter a valid Phone number',
      ],
    },
    role: { type: String },
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
