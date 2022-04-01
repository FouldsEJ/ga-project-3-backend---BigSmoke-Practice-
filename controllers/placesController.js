import { text } from 'express';
import Place from '../models/places.js';
import Station from '../models/station.js';

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

const getPlaceBySearch = async (req, res, next) => {
  try {
    const textSearch = req.query.text;
    const categorySearch = req.query.category;
    const stationSearch = req.query.station;

    const places = await Place.find({
      name: new RegExp(textSearch, 'i'),
      category: { $regex: categorySearch },
      stationName: { $regex: stationSearch },
    });
    console.log(places);

    if (!places) {
      return res.status(404).send({ message: 'No places found' });
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

const getPlaceByItenerary = async (req, res, next) => {
  try {
    const userId = req.query.itenerary;
    const places = await Place.find({ itenerary: userId });
    console.log(places.length);
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
    const popular = await Place.find().sort({ likes: -1 }).limit(7);
    console.log(popular);

    return res.status(200).json(popular);
  } catch (error) {
    next(error);
  }
};

const createPlace = async (req, res, next) => {
  try {
    const newPlace = await Place.create(req.body);

    const x = await Station.updateOne(
      { name: newPlace.stationName },
      { $push: { places: newPlace._id } }
    );

    const station = await Station.findOne({ name: newPlace.stationName });
    newPlace.stationId.push(station._id);
    const savedPlace = await newPlace.save();

    return res.status(201).json(savedPlace);
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

    place.likes = place.likes + 1;
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

    if (place.likes > 0) {
      place.likes = place.likes - 1;
      await place.save();
    }

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
  getPlaceBySearch,
  getPlaceByItenerary,
};
