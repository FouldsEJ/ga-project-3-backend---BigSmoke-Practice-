import { connectToDb, disconnetDb } from './helper.js';

import data from './data.js';
import Places from '../models/places.js';
import User from '../models/user.js';
import Station from '../models/station.js';

async function seed() {
  await connectToDb();
  console.log('Successfully connected to Mongo DB via Mongoose!');

  console.log('Clearing out the DB..');
  await Places.deleteMany({});
  await User.deleteMany({});
  await Station.deleteMany({});

  console.log('Creating users..');

  const adminUser = await User.create({
    name: 'admin',
    username: 'admin',
    image:
      'https://www.pikpng.com/pngl/m/80-805275_blank-facebook-profile-pic-female-portrait-silhouette-clipart.png',
    email: 'admin@admin.com',
    password: 'password!1',
    isAdmin: true,
  });

  const normalUser = await User.create({
    name: 'user',
    username: 'user',
    image:
      'https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU=',
    email: 'user@user.com',
    password: 'password!1',
  });

  const eve = await User.create({
    name: 'eve',
    username: 'eve',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsZWtx4wKRP6qNe8JrOShIdswJIR7jhtDCA&usqp=CAU',
    email: 'eve@eve.com',
    password: 'password!1',
  });

  const edwardFoulds = await User.create({
    name: 'Edward Foulds',
    username: 'efoulds1',
    image:
      'https://media-exp1.licdn.com/dms/image/C4E03AQFvRuDqaNMLLQ/profile-displayphoto-shrink_400_400/0/1647541273789?e=1654128000&v=beta&t=9JSFarOS45p99ScaMWMmUvL5UkaNkpi9lMRMoCdjqBg',
    email: 'efoulds@efoulds.com',
    password: 'password!1',
  });

  const barneyGibson = await User.create({
    name: 'Barney Gibson',
    username: 'bgibson2',
    image:
      'https://scontent.flba3-1.fna.fbcdn.net/v/t1.6435-9/56815874_10219223235078828_3618724222798397440_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=YpH-imJkwlQAX-j-rva&_nc_ht=scontent.flba3-1.fna&oh=00_AT_MHTYZt-YuTlNifh8v3VlwZfVOIjV99pgfx4ac7v9Vxg&oe=62692695',
    email: 'bgibson@bgibson.com',
    password: 'password!1',
  });

  const priya = await User.create({
    name: 'Priya',
    username: 'Pea75x',
    image: 'https://ibb.co/F5gybMC',
    email: 'priya_93_x@hotmail.co.uk',
    password: 'password!1',
  });

  const seededStations = await Station.create(data.stations);
  const seededPlaces = await Places.create(data.places);

  await Places.updateOne(
    { name: 'Tower Of London' },

    {
      $push: {
        reviews: {
          comment: 'Where I come to cry. 10/10 would recommend',
          rating: 5,
          createdBy: edwardFoulds._id,
        },
      },
    }
  );
  await Places.updateOne(
    { name: 'Tower Of London' },

    {
      $push: {
        reviews: {
          comment: 'Great place. Watch out for the creepy man though..',
          rating: 2,
          createdBy: barneyGibson._id,
        },
      },
    }
  );
  await Places.updateOne(
    { name: 'Tate Modern' },

    {
      $push: {
        reviews: {
          comment: 'NICEEEEEEEEEE',
          rating: 5,
          createdBy: edwardFoulds._id,
        },
      },
    }
  );

  //! Seeding stations into places and places into stations
  seededPlaces.map((place) => {
    const stationNameArray = place.stationName;
    // console.log(stationNameArray);
    for (let i = 0; i < stationNameArray.length; i++) {
      // console.log(stationNameArray[i]);
      seededStations.map((station) => {
        // console.log('THis is the station: ', station.name);
        if (station.name === stationNameArray[i]) {
          // console.log('Add this');
          // console.log('Station ID: ', place.stationId);
          place.stationId.push(station._id);
          // console.log('Place with Station ID: ', place);
          station.places.push(place._id);
          // console.log('Station with Place ID: ', station);
        }
      });
    }
  });

  console.log('Seeded Places: ', seededPlaces.length);
  console.log('Seeded Stations: ', seededStations.length);

  await disconnetDb();
  console.log('disconnected!');
}

seed();
