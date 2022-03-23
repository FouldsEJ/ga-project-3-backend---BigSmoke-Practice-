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

const createPlace = async (req, res, next) => {
  try {
    const newPlace = await Place.create(req.body);

    return res.status(201).json(newPlace);
  } catch (err) {
    next(err);
  }
};

export default {
  getAllPlaces,
  getPlaceById,
  createPlace,
};
