import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import createFakeData from '../createFakeData.js';
const { MONGO_URI } = process.env;

const connect = () => {
  mongoose.connect(MONGO_URI, (error) => {
    if (error) {
      console.log('MongoDB error', error);
    } else {
      console.log('Connected MongoDB');
      createFakeData();
    }
  });
};
mongoose.connection.on('error', (error) => {
  console.error('mongoDB error', error);
});
mongoose.connection.on('disconnected', () => {
  console.error('mongoDB disconnection reply connect');
  connect();
});

export default connect;
