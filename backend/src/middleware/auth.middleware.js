import jwt from "jsonwebtoken";
import { getUserById } from "../dao/user.dao.js";
export const authMiddleware = async (req, res, next) => {
  const token =
    req.headers.authorization?.split(" ")[1] || req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await getUserById(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};
