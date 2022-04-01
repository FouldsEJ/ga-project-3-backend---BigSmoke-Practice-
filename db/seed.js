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
    image: 'https://cdn-icons-png.flaticon.com/512/2206/2206368.png',
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

  const jimBrown = await User.create({
    name: 'Jim Brown',
    username: 'jbrown',
    image:
      'https://res.cloudinary.com/pea75x/image/upload/v1648814247/profile-picture/xqj7u3y4r7utay35nzvh.png',
    email: 'jbrown@bgibson.com',
    password: 'password!1',
  });

  const priya = await User.create({
    name: 'Priya',
    username: 'Pea75x',
    image: 'https://ibb.co/F5gybMC',
    email: 'priya_93_x@hotmail.co.uk',
    password: 'password!1',
  });

  const tania = await User.create({
    name: 'Tania',
    username: 'Tania',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJeZhb6RExHq40FCStJxdXyDt-8-f0nxMramKZkLKHtmtFKNsrULidcysTtegJEZxWNs&usqp=CAU',
    email: 'tania@tania.com',
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
          comment: 'Great place! Delivery for tiddles...',
          rating: 2,
          createdBy: jimBrown._id,
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

  await Places.updateOne(
    { name: 'Tate Modern' },
    {
      $push: {
        reviews: {
          comment:
            'Although art is a form of expression I feel like a lot of the artwork is cheating qualitative artwork. Don’t believe this is true art but rather laziness and illusion.',
          rating: 2,
          createdBy: eve._id,
        },
      },
    }
  );

  await Places.updateOne(
    { name: 'The London Eye' },
    {
      $push: {
        reviews: {
          comment:
            'Fantastic view over London but massively overpriced. Could at least have had an audio description of the sights etc.',
          rating: 3,
          createdBy: tania._id,
        },
      },
    }
  );

  await Places.updateOne(
    { name: 'Covent Garden' },
    {
      $push: {
        reviews: {
          comment:
            'We had the pleasure of enjoying violinists performing last week, beautiful weather, great atmosphere, theres the markets to enjoy and some great places to eat.',
          rating: 5,
          createdBy: tania._id,
        },
      },
    }
  );

  await Places.updateOne(
    { name: 'Southbank Centre' },
    {
      $push: {
        reviews: {
          comment:
            'The Southbank Centre is a fantastic space with great events for all ages. The staff are tremedous , and the southbank is stunning in the evenings.',
          rating: 5,
          createdBy: priya._id,
        },
      },
    }
  );

  await Places.updateOne(
    { name: 'Natural History Museum' },
    {
      $push: {
        reviews: {
          comment:
            'You cannot go wrong with free entry. Fantastic way to spend a few hours.',
          rating: 5,
          createdBy: eve._id,
        },
      },
    }
  );

  await Places.updateOne(
    { name: 'Natural History Museum' },
    {
      $push: {
        reviews: {
          comment:
            'I knew this place was big but not THAT big!! The building itself is just bloody beautiful, finest victorian artictecture.',
          rating: 5,
          createdBy: tania._id,
        },
      },
    }
  );

  await Places.updateOne(
    { name: 'Borough Market' },
    {
      $push: {
        reviews: {
          comment:
            'Food heaven! Loved this place, great atmosphere, such a good selection of incredible foods on offer, can’t wait to return',
          rating: 5,
          createdBy: tania._id,
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
