import mongoose from "mongoose";

// mongoose
//   .connect(process.env.MONGO_DB)
//   .then(() => console.log("Database Connected"))
//   .catch((error) => console.log(error.message));

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Database Connected");
  } catch (error) {
    console.log(error.message);
  }
})();
