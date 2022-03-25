import Places from '../models/places.js';

const createReview = async (req, res, next) => {
  try {
    const place = await Places.findById(req.params.id);

    if (!place) {
      return res.status(404).send({ message: 'Destination not found' });
    }
    const newReview = {
      ...req.body,
      createdBy: req.currentUser._id,
    };
    place.reviews.push(newReview);
    const savedReview = await place.save();

    return res.status(201).json(savedReview);
  } catch (err) {
    next(err);
  }
};

const deleteReview = async (req, res, next) => {
  try {
    const { id, reviewId } = req.params;
    const place = await Places.findById(id);

    if (!place) {
      return res.status(404).send({ message: 'Destination not found' });
    }
    const review = place.reviews.id(reviewId);

    if (!review) {
      return res.status(404).send({ message: 'Review not found' });
    }

    review.remove();
    const savedPlace = await place.save();

    return res.status(200).send(savedPlace);
  } catch (err) {
    next(err);
  }
};

const updateReview = async (req, res, next) => {
  try {
    const { id, reviewId } = req.params;
    const place = await Places.findById(id);

    if (!place) {
      return res.status(404).send({ message: 'Place not found' });
    }

    const review = place.reviews.id(reviewId);

    if (!review) {
      return res.status(404).send({ message: 'Review not found' });
    }

    review.set(req.body);

    const savedPlace = await place.save();
    return res.status(200).send(savedPlace);
  } catch (err) {
    next(err);
  }
};

export default {
  createReview,
  deleteReview,
  updateReview,
};
