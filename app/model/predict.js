import mongoose from "mongoose";

const predictSchema = new mongoose.Schema({
  crop_type: {
    type: String,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  moisture: {
    type: Number,
    required: true,
  },
  nitrogen: {
    type: Number,
    required: true,
  },
  phosphorous: {
    type: Number,
    required: true,
  },
  potassium: {
    type: Number,
    required: true,
  },
  soil_type: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
});

const Predict = mongoose.model("Predict", predictSchema);
export default Predict;
