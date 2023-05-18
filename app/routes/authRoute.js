import express from "express";
const router = new express.Router();
import authController from "../controller/authController";

router.post("/register", authController.register);




router.post("/login", authController.signIn);

module.exports = router;
