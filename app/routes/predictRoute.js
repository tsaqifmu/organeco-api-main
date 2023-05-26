import express from "express";
import predict from "../controller/predictController.js";
const router = new express.Router();

router.post("/", predict);

export default router;
