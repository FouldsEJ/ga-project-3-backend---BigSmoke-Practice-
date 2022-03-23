import mongoose from 'mongoose';
import { dbUrl } from '../config/environment.js';

export const connectToDb = () => {
  return mongoose.connect(dbUrl);
};

export const disconnetDb = () => {
  if (mongoose.connection.readyState !== 0) {
    return mongoose.disconnect();
  }
};
