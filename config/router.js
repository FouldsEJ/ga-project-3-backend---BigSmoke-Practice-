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
router.route('/places/popular').get(placesController.getPopular);

router.route('/places/likes').get(placesController.getPlaceByLike);

router.route('/image/:id').post(usersController.postImage);

router.route('/places/:id').get(placesController.getPlaceById);

router
  .route('/places/:id/likes')
  .post(secureRoute, placesController.addLike)
  .delete(secureRoute, placesController.removeLike);

router
  .route('/places/:id/itenerary')
  .post(secureRoute, placesController.addToItenerary)
  .delete(secureRoute, placesController.removeFromItenerary);

router
  .route('/places/:id/reviews')
  .post(secureRoute, reviewController.createReview);

router
  .route('/places/:id/reviews/:reviewId')
  .delete(secureRoute, reviewController.deleteReview)
  .put(secureRoute, reviewController.updateReview);

router.route('/register').post(usersController.registerUser);
router.route('/login').post(usersController.loginUser);
router.route('/users').get(usersController.getUsers);
router.route('/user/:id').get(usersController.getUser);

router.route('/stations').get(tubeController.getAllStations);

export default router;
