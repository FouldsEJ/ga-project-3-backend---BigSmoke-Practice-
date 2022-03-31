import { connectToDb, disconnetDb } from './helper.js';

import data from './data.js';
import Places from '../models/places.js';
import User from '../models/user.js';
import Station from '../models/station.js';
//import Image from '../models/image.js';

const adminUser = {
  name: 'admin',
  username: 'admin',
  image:
    'https://www.pikpng.com/pngl/m/80-805275_blank-facebook-profile-pic-female-portrait-silhouette-clipart.png',
  email: 'admin@admin.com',
  password: 'password!1',
  isAdmin: true,
};

const normalUser = {
  name: 'user',
  username: 'user',
  image:
    'https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU=',
  email: 'user@user.com',
  password: 'password!1',
};

const user1 = {
  name: 'eve',
  username: 'eve',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsZWtx4wKRP6qNe8JrOShIdswJIR7jhtDCA&usqp=CAU',
  email: 'eve@eve.com',
  password: 'password!1',
};

export let seededStations = '';

async function seed() {
  await connectToDb();
  console.log('Successfully connected to Mongo DB via Mongoose!');

  console.log('Clearing out the DB..');
  await Places.deleteMany({});
  await User.deleteMany({});
  await Station.deleteMany({});
  //await Image.deleteMany({});

  console.log('Creating users..');
  const [admin, user, eve] = await User.create([adminUser, normalUser, user1]);
  console.log(`Created admin user: ${admin._id}`);
  console.log(`Created normal user: ${user._id}`);
  console.log(`Created Eve: ${eve._id}`);

  seededStations = await Station.create(data.stations);
  console.log('These are the stations seeded: ' + seededStations);

  const seededPlaces = await Places.create(data.places);
  console.log('This are the places seeded: ' + seededPlaces);

  await disconnetDb();
  console.log('disconnected!');
}

seed();
