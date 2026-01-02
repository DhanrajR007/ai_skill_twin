import express from "express";
import {
  loginController,
  registerController,
} from "../controller/auth.controller.js";
import {
  validateLogin,
  validateRegistration,
} from "../middleware/validator.middleware.js";

const router = express.Router();

router.post("/register", validateRegistration, registerController);
router.post("/login", validateLogin, loginController);

export default router;
