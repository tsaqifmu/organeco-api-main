import Joi from "joi";

const signInValidator = Joi.object({
  ph: Joi.number().required(),
  humidity: Joi.number().required(),
  temperature: Joi.number().required(),
});

export default signInValidator;
