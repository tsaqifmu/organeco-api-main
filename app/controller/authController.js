import httpStatus from "http-status";
import jwt from "jsonwebtoken";

// import models
import Response from "../model/response.js";
import User from "../model/user.js";

// import utils
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
      return res.status(httpStatus.BAD_REQUEST).json(response);
    }

    const hashedPassword = await bcryptUtils.hash(request.password);
    request.password = hashedPassword;

    const newUser = new User(request);
    await newUser.save();

    response = new Response.Success(false, "User Created");
    return res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    return res.status(httpStatus.BAD_REQUEST).json(response);
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
      return res.status(httpStatus.BAD_REQUEST).json(response);
    }

    const isValidPassword = await bcryptUtils.compare(
      request.password,
      user.password,
    );
    if (!isValidPassword) {
      response = new Response.Error(true, signInErrorMessage);
      return res.status(httpStatus.BAD_REQUEST).json(response);
    }

    const createJwtToken = jwt.sign({ id: user._id }, process.env.KEY);
    const loginResult = {
      userId: user._id,
      name: user.name,
      email: user.email,
      token: createJwtToken,
    };
    response = new Response.Success(false, "success", loginResult);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    return res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

export { register, login };
