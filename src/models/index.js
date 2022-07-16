import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
const { MONGO__IN_URI, MONGO_EX_URI } = process.env;

const connect = () => {
  mongoose.connect(MONGO__IN_URI, (error) => {
    if (error) {
      console.log('MongoDB error', error);
    } else {
      console.log('Connected MongoDB');
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
