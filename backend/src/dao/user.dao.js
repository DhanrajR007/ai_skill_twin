import User from "../model/user.model.js";

export const isUserExist = async (email) => {
  try {
    const isUserAlreadyExist = await User.findOne({ email });
    return isUserAlreadyExist;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
