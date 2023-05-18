import Response from "../model/response";
import User from "../model/user";
import bcrypt from "../utils/bcrypt";
import userValidator from "../utils/userValidator";
import httpStatus from "http-status";
// import validator from "validator";

const signUp = async (req, res) => {
  let response = null;
  try {
    const request = await userValidator.validateAsync(req.body);
    const users = await User.findOne({ email: request.email });
    if (users) {
      response = new Response.Error(true, "Email already exist");
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    const hashedPassword = await bcrypt.hash(request.password);
    request.password = hashedPassword;

    const user = new User(request);

    const result = await user.save();
    response = new Response.Success(false, null, result);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};
