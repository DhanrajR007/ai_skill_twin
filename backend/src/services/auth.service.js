import { isUserExist } from "../dao/user.dao.js";
import User from "../model/user.model.js";
import { ConflictError } from "../utils/errorHandler";
import { bcryptPassword } from "../utils/helper.js";

export const registerService = async (name, email, password) => {
  try {
    const isUserAlreadyExist = await isUserExist(email);
    if (isUserAlreadyExist) {
      throw new ConflictError("User already exists");
    }
    const hashedPassword = bcryptPassword(password);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  } catch (error) {
    throw new Error(error);
  }
};
