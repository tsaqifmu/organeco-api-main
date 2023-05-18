import { Error } from "../model/response";

const pageNotFound = (_, res) => {
  res.json(new Error(true, "Page Not Found"));
};

export default pageNotFound;
