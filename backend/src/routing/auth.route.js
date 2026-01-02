import express from "express";
import { registerController } from "../controller/auth.controller.js";
import { validateRegistration } from "../middleware/validator.middleware.js";

const router = express.Router();

router.post("/register", validateRegistration, registerController);

export default router;
