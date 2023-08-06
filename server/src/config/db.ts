import dotenv from "dotenv";
import mongoose, { Mongoose } from "mongoose";

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const conn: Mongoose = await mongoose.connect(
      String(process.env.MONGO_URI)
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err: any) {
    console.error(`error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
