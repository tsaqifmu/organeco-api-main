import express from "express";
const router = new express.Router();

import authController from "../controller/authController.js";

router.post("/register", authController);

export default router;
