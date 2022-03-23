import User from '../models/user.js';

const registerUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    return res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
  } catch (err) {}
};

export default {
  registerUser,
  loginUser,
};
