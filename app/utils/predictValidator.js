import Joi from "joi";

const predictValidator = Joi.object({
  crop_type: Joi.string().required(),
  humidity: Joi.number().required(),
  moisture: Joi.number().required(),
  nitrogen: Joi.number().required(),
  phosphorous: Joi.number().required(),
  potassium: Joi.number().required(),
  soil_type: Joi.string().required(),
  temperature: Joi.number().required(),
});

export default predictValidator;
