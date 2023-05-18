import express from "express";
import dotenv from "dotenv";

const app = express();

// ENDPOINT
import authRouter from "./routes/authRoute"; //LETS MAKE THIS ONE

// MIDDLEWARE
import pageNotFound from "./utils/pageNotFound";

// CONFIGURE DOTENV
dotenv.config();

// CONFIGURE DATABASE
import "./database/mongodb";

// PORT AND PATH
const PORT = process.env.PORT || 8080;
const VERSION_API = "/api/v1";
const appendUrl = (url) => `${VERSION_API}${url}`;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTER
app.use(appendUrl("/auth"), authRouter);

// ENDPOINT NOT CREATED
app.use("/", pageNotFound);

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`),
);
