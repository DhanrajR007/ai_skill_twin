import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../config/config.js";
import md5 from "md5";

export const getAvatar = (email) => {
  const hash = md5(email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
};

export const generateToken = (user) => {
  const token = jwt.sign({ id: user._id }, config.jwtSecret, {
    expiresIn: config.jwtExpiry,
  });
  return token;
};
export const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};
export const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
