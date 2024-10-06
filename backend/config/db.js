import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://swapnilganvir55:9yy5CFg0znGy6K2d@cluster0.a1jkd.mongodb.net/food-del'
    )
    .then(() => console.log('DB Connected'));
};
