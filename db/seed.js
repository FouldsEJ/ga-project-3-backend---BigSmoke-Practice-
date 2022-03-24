import { connectToDb, disconnetDb } from './helper.js';

import { places, tubes } from './data.js';
import Places from '../models/places.js';
import User from '../models/user.js';
import Station from '../models/station.js';

const adminUser = {
  name: 'admin',
  username: 'admin',
  email: 'admin@admin.com',
  password: 'password!1',
  isAdmin: true,
};

const normalUser = {
  name: 'user',
  username: 'user',
  email: 'user@user.com',
  password: 'Password!1',
};

async function seed() {
  await connectToDb();
  console.log('Successfully connected to Mongo DB via Mongoose!');

  console.log('Clearing out the DB..');
  await Places.deleteMany({});
  await User.deleteMany({});
  await Station.deleteMany({});

  console.log('Creating users..');
  const [admin, user] = await User.create([adminUser, normalUser]);
  console.log(`Created admin user: ${admin._id}`);
  console.log(`Created normal user: ${user._id}`);

  const seededStations = await Station.create(tubes);
  console.log('These are the stations seeded: ' + seededStations);

  const seededPlaces = await Places.create(places);
  console.log('This are the places seeded: ' + seededPlaces);

  await disconnetDb();
  console.log('disconnected!');
}

seed();
