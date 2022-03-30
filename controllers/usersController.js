import User from '../models/user.js';
import { secret } from '../config/environment.js';
import jwt from 'jsonwebtoken';

const registerUser = async (req, res) => {
  try {
    if (req.body.password !== req.body.passwordConfirmation) {
      return res.status(422).json({ message: 'Passwords do not match.' });
    }

    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(404).json(err);
    // next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: 'Unauthorized, user not found' });
    }

    if (!user) {
      return res.status(404).json({ message: 'Unauthorized, user not found' });
    }
    const isValidPw = user.validatePassword(req.body.password);

    if (!isValidPw) {
      return res
        .status(404)
        .json({ message: 'Unauthorized, passwords do not match' });
    }
    const token = jwt.sign(
      {
        userId: user._id,
        isAdmin: user.isAdmin,
        userName: user.name
      }, // payload on our token
      secret, // the secret that only the developer knows
      { expiresIn: '6h' } // token expires in 6 hours
    );

    return res.status(202).send({ token, message: 'Login successful!' });
  } catch (err) {
    next(err);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).send({ message: 'No users found' });
    }

    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'No users found' });
    }

    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export default {
  registerUser,
  loginUser,
  getUsers,
  getUser
};
