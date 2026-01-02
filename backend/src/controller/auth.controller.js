import { loginService, registerService } from "../services/auth.service.js";

export const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const { user, token } = await registerService(name, email, password);
    res.status(201).json({
      user,
      token,
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User registration failed",
      error: error.message,
    });
  }
};
export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { user, token } = await loginService(email, password);
    res.status(200).json({
      user,
      token,
      success: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User login failed",
      error: error.message,
    });
  }
};
