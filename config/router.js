import express from 'express';
import placesController from '../controllers/placesController.js';
import usersController from '../controllers/usersController.js';
import secureRoute from '../middleware/secureRoute.js';
import reviewController from '../controllers/reviewController.js';

const router = express.Router();

router
  .route('/places')
  .get(placesController.getAllPlaces)
  .post(secureRoute, placesController.createPlace);

router.route('/places/:id').get(placesController.getPlaceById);

router
  .route('/places/:id/reviews')
  .post(reviewController.createReview)
  .put(reviewController.createReview);

router
  .route('/places/:id/reviews/:reviewId')
  .delete(reviewController.deleteReview)
  .router.route('/register')
  .post(usersController.registerUser);
router.route('/register').post(usersController.registerUser);
router.route('/login').post(usersController.loginUser);

export default router;
