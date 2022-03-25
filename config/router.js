import express from 'express';
import placesController from '../controllers/placesController.js';
import usersController from '../controllers/usersController.js';
import secureRoute from '../middleware/secureRoute.js';
import reviewController from '../controllers/reviewController.js';
import tubeController from '../controllers/tubeController.js';

const router = express.Router();

router
  .route('/places')
  .get(placesController.getAllPlaces)
  .post(secureRoute, placesController.createPlace);

router.route('/places/categories').get(placesController.getPlaceByCategory);

router.route('/places/:id').get(placesController.getPlaceById);

router.route('/places/:id/likes').post(placesController.addLike);

router
  .route('/places/:id/reviews')
  .post(secureRoute, reviewController.createReview);

router
  .route('/places/:id/reviews/:reviewId')
  .delete(secureRoute, reviewController.deleteReview)
  .put(secureRoute, reviewController.updateReview);

router.route('/register').post(usersController.registerUser);
router.route('/login').post(usersController.loginUser);

router.route('/stations').get(tubeController.getAllStations);

export default router;
