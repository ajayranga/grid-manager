import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import IAlert from '../types/Alert';

export const alertSchema = new mongoose.Schema<IAlert>(
  {
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
    activeDays: {
      type: [String],
    },
    isTriggered: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
const Alert = mongoose.model('Alert', alertSchema);

export default Alert;
