import mongoose from "mongoose";

const predictSchema = new mongoose.Schema({
  ph: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
});

const Predict = mongoose.model("Predict", predictSchema);
export default Predict;
