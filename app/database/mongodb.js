import mongoose from "mongoose";
import dotenv from "dotenv";
// ==>CLYCLIC<==
// if (process.env.NODE_ENV !== "production") {
//   dotenv.config();
// }

// ==>GCP<==
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
