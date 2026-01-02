import { isUserExist } from "../dao/user.dao.js";
import User from "../model/user.model.js";
import { ConflictError } from "../utils/errorHandler.js";
import { bcryptPassword, generateToken, getAvatar } from "../utils/helper.js";

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
