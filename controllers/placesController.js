import Place from '../models/places.js';

const getAllPlaces = async (req, res, next) => {
  try {
    const allPlaces = await Place.find();

    if (!allPlaces) {
      return res.status(404).send({ message: 'No places found' });
    }

    return res.status(200).json(allPlaces);
  } catch (err) {
    next(err);
  }
};

const getPlaceById = async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id);

    if (!place) {
      return res.status(404).send({ message: 'Place not found' });
    }

    return res.status(200).json(place);
  } catch (err) {
    next(err);
  }
};

const getPlaceByCategory = async (req, res, next) => {
  try {
    const categoryType = req.query.category;
    const places = await Place.find({ category: categoryType });
    console.log(places);
    console.log(categoryType);

    if (!categoryType) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).json(places);
  } catch (err) {
    next(err);
  }
};

const getPlaceByLike = async (req, res, next) => {
  try {
    const userId = req.query.likes;
    const places = await Place.find({ likes: userId });
    console.log(places);
    console.log(userId);

    if (!userId) {
      return res.status(404).send({ message: 'user not found' });
    }

    return res.status(200).json(places);
  } catch (err) {
    next(err);
  }
};

const getPopular = async (req, res, next) => {
  try {
    const popular = await Place.find().limit(5);
    console.log(popular);

    return res.status(200).json(popular);
  } catch (error) {
    next(error);
  }
};

const createPlace = async (req, res, next) => {
  try {
    const newPlace = await Place.create(req.body);

    return res.status(201).json(newPlace);
  } catch (err) {
    next(err);
  }
};

const addLike = async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id);

    if (!place) {
      res.status(404).send({ message: 'Place not found' });
    }

    place.likes.push(req.currentUser._id);
    const savedPlace = await place.save();

    return res.status(200).json(savedPlace);
  } catch (err) {
    next(err);
  }
};

const removeLike = async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id);

    if (!place) {
      res.status(404).send({ message: 'Place not found' });
    }

    console.log(place);
    place.likes.remove(req.currentUser.id);
    console.log(place);
    await place.save();

    return res.status(200).json(place);
  } catch (err) {
    next(err);
  }
};

const addToItenerary = async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id);

    if (!place) {
      res.status(404).send({ message: 'Place not found' });
    }

    place.itenerary.push(req.currentUser._id);
    const savedPlace = await place.save();
    return res.status(200).json(savedPlace);
  } catch (error) {
    next(error);
  }
};

const removeFromItenerary = async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id);

    if (!place) {
      res.status(404).send({ message: 'Place not found' });
    }
    place.itenerary.remove(req.currentUser.id);
    await place.save();
    return res.status(200).json(place);
  } catch (error) {
    next(error);
  }
};

const getPlaceByItenerary = async (req, res, next) => {
  try {
    const userId = req.query.itenerary;
    const places = await Place.find({ intenerary: userId });
    console.log(places);
    console.log(userId);

    if (!userId) {
      return res.status(404).send({ message: 'user not found' });
    }

    return res.status(200).json(places);
  } catch (err) {
    next(err);
  }
};

export default {
  getAllPlaces,
  getPlaceById,
  createPlace,
  addLike,
  removeLike,
  getPlaceByCategory,
  getPopular,
  getPlaceByLike,
  addToItenerary,
  removeFromItenerary,
  getPlaceByItenerary
};
