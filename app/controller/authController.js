import httpStatus from "http-status";
import jwt from "jsonwebtoken";
// import validator from "validator";

import Response from "../model/response.js";
import User from "../model/user.js";
import bcryptUtils from "../utils/bcrypt.js";
import registerValidator from "../utils/registerValidator.js";
import loginValidator from "../utils/loginValidator.js";

const register = async (req, res) => {
  let response = null;
  try {
    const request = await registerValidator.validateAsync(req.body);
    const users = await User.findOne({ email: request.email });
    if (users) {
      response = new Response.Error(true, "Email already exist");
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    const hashedPassword = await bcryptUtils.hash(request.password);
    request.password = hashedPassword;

    const user = new User(request);
    const result = await user.save();
    response = new Response.Success(false, "User Created", result);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

const login = async (req, res) => {
  let response = null;
  const signInErrorMessage = "Invalid email or password";
  try {
    const request = await loginValidator.validateAsync(req.body);

    const user = await User.findOne({ email: request.email });
    if (!user) {
      response = new Response.Error(true, signInErrorMessage);
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    const isValidPassword = await bcryptUtils.compare(
      request.password,
      user.password,
    );
    if (!isValidPassword) {
      response = new Response.Error(true, signInErrorMessage);
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    const createJwtToken = jwt.sign({ id: user._id }, process.env.KEY);
    const data = { token: createJwtToken };
    response = new Response.Success(false, null, data);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

export { register, login };
