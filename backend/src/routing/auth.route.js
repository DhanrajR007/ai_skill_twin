import express from "express";
import {
  loginController,
  registerController,
} from "../controller/auth.controller.js";
import {
  validateLogin,
  validateRegistration,
} from "../middleware/validator.middleware.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", validateRegistration, registerController);
router.post("/login", validateLogin, loginController);
router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    user: req.user,
  });
});

export default router;
