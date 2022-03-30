import User from '../models/user.js';
import Image from '../models/image.js';
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

const getImage = async (req, res, next) => {
  try {
    const userId = req.query.user;
    const imageUrl = await Image.findOne({ user: userId });
    console.log('url: ', imageUrl);
    console.log('user id: ', userId);

    if (!userId) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).json(imageUrl);
  } catch (err) {
    next(err);
  }
};

const getAllImages = async (req, res, next) => {
  try {
    const images = await Image.find();

    if (!images) {
      return res.status(404).send({ message: 'No images found' });
    }

    return res.status(200).json(images);
  } catch (err) {
    next(err);
  }
};

async function postImage(req, res, next) {
  const image = req.body;
  try {
    const newImage = await Image.create(image);
    res.status(201).send(newImage);
  } catch (err) {
    next(err);
  }
}

export default {
  registerUser,
  loginUser,
  getImage,
  postImage,
  getAllImages
};
