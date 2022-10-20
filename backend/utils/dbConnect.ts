import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGO_URI as string;
(() => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log('Successfully connected to MongoDb');
    })
    .catch((err) => {
      console.log(`Error Connecting to MongoDb ${err}`);
    });
})();
