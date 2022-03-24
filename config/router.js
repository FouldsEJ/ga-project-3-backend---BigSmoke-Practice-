import express from 'express';
import placesController from '../controllers/placesController.js';
import usersController from '../controllers/usersController.js';
import secureRoute from '../middleware/secureRoute.js';

const router = express.Router();

router
  .route('/places')
  .get(placesController.getAllPlaces)
  .post(secureRoute, placesController.createPlace);

router.route('/places/:id').get(placesController.getPlaceById);

router.route('/register').post(usersController.registerUser);

export default router;
