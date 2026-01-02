import User from "../model/user.model.js";

export const isUserExist = async (email) => {
  try {
    const isUserAlreadyExist = await User.findOne({ email });
    return isUserAlreadyExist;
  } catch (error) {
    throw new Error(error);
  }
};
