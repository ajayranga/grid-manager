import mongoose from 'mongoose';
import IUser from './User';

export default interface IAlert {
  priceSignal: string;
  criteria: string;
  value: number;
  activeDays: string[];
  isTriggered: boolean;
}
