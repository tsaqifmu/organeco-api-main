import httpStatus from "http-status";

// import from models
import Response from "../model/response.js";
import Predict from "../model/predict.js";

// import from utils
import predictValidator from "../utils/predictValidator.js";

const predict = async (req, res) => {
  let response = null;
  try {
    const request = await predictValidator.validateAsync(req.body);
    const predict = new Predict(request);

    await predict.save();

    response = new Response.Success(false, "Data added successfully");
    return res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    return res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

export default predict;
