import { isUserExist } from "../dao/user.dao.js";
import User from "../model/user.model.js";
import { BadRequestError, ConflictError } from "../utils/errorHandler.js";
import {
  bcryptPassword,
  comparePassword,
  generateToken,
  getAvatar,
} from "../utils/helper.js";

export const registerService = async (name, email, password) => {
  try {
    const isUserAlreadyExist = await isUserExist(email);
    if (isUserAlreadyExist) {
      throw new ConflictError("User already exists");
    }
    const hashedPassword = bcryptPassword(password);
    const avatar = getAvatar(email);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      avatar: avatar,
    });

    const token = generateToken(user);

    return { user, token };
  } catch (error) {
    throw new Error(error);
  }
};

export const loginService = async (email, password) => {
  try {
    const user = await isUserExist(email);
    if (!user) {
      throw new BadRequestError("Invalid Credentials");
    }
    const isPasswordValid = comparePassword(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestError("Invalid Credentials");
    }
    const token = generateToken(user);
    return { user, token };
  } catch (error) {
    throw new Error(error);
  }
};
