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

const eve = {
  name: 'eve',
  username: 'eve',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsZWtx4wKRP6qNe8JrOShIdswJIR7jhtDCA&usqp=CAU',
  email: 'eve@eve.com',
  password: 'password!1',
};

const edwardFoulds = {
  name: 'Edward Foulds',
  username: 'efoulds1',
  image:
    'https://media-exp1.licdn.com/dms/image/C4E03AQFvRuDqaNMLLQ/profile-displayphoto-shrink_400_400/0/1647541273789?e=1654128000&v=beta&t=9JSFarOS45p99ScaMWMmUvL5UkaNkpi9lMRMoCdjqBg',
  email: 'efoulds@efoulds.com',
  password: 'password!1',
};

const barneyGibson = {
  name: 'Barney Gibson',
  username: 'bgibson2',
  image:
    'https://scontent.flba3-1.fna.fbcdn.net/v/t1.6435-9/56815874_10219223235078828_3618724222798397440_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=YpH-imJkwlQAX-j-rva&_nc_ht=scontent.flba3-1.fna&oh=00_AT_MHTYZt-YuTlNifh8v3VlwZfVOIjV99pgfx4ac7v9Vxg&oe=62692695',
  email: 'bgibson@bgibson.com',
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

  await User.create([adminUser, normalUser, edwardFoulds, barneyGibson, eve]);

  seededStations = await Station.create(data.stations);
  // console.log('These are the stations seeded: ' + seededStations);

  const seededPlaces = await Places.create(data.places);
  console.log('This are the places seeded: ' + seededPlaces);

  // // Seeding stations into places and places into stations
  // seededPlaces.map((place) => {
  //   const stationNameArray = place.stationName;
  //   for (let i = 0; i < stationNameArray; i++) {
  //     console.log(stationNameArray[i]);
  //   }
  // });

  await disconnetDb();
  console.log('disconnected!');
}

seed();
