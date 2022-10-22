import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

import IAlert from '../types/Alert';

export const alertSchema = new mongoose.Schema<IAlert>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Name is required'],
      minLength: 4,
    },
    priceSignal: {
      type: String,
      trim: true,
      lowercase: true,
      minLength: 3,
    },
    criteria: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Email is required'],
    },
    value: {
      type: Number,
      default: 0,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Email is required'],
      validate: [
        (email: string) => {
          var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return re.test(email);
        },
        'Please enter a valid email',
      ],
    },
    alertDays: {
      type: [String],
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
const Alert = mongoose.model('Alert', alertSchema);

export default Alert;
