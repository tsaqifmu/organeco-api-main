import mongoose from "mongoose";

// mongoose
//   .connect(process.env.MONGO_DB)
//   .then(() => console.log("Database Connected"))
//   .catch((error) => console.log(error.message));

// (async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_DB);
//     console.log("Database Connected");
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

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
