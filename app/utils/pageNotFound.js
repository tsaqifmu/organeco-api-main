import Response from "../model/response.js";

const pageNotFound = (_, res) => {
  res.json(new Response.Error(true, "Page Not Found"));
};

export default pageNotFound;
