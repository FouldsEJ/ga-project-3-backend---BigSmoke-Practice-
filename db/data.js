const createPlace = (
  name,
  description,
  category,
  image,
  lat,
  long,
  openingTimes,
  contact,
  stationName
) => {
  return {
    name: name,
    description: description,
    category: category,
    image: image,
    lat: lat,
    long: long,
    openingTimes: openingTimes,
    contact: contact,
    stationName: stationName,
  };
};

const places = [
  createPlace(
    'Tower Of London',
    "The Tower of London is an internationally famous monument and one of England's most iconic structures.",
    ['arts / culture'],
    'https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-of-london/the-tower-of-london-castle-640x360.jpg',
    51.5081,
    0.0759,
    '9am - 5:30pm',
    'E-mail: info@hrp.org.uk   Telephone+44 (0)33 3320 6000',
    ['Tower Hill']
  ),
  createPlace(
    'Tate Modern',
    "Britain's national museum of modern and contemporary art from around the world is housed in the former Bankside Power Station on the banks of the Thames. The awe-inspiring Turbine Hall runs the length of the entire building and you can see amazing work for free by artists such as Cézanne, Bonnard, Matisse, Picasso, Rothko, DalÍ­, Pollock, Warhol and Bourgeois.",
    ['arts / culture'],
    'https://a.cdn-hotels.com/gdcs/production161/d329/1dd2958c-c93e-486a-a7ad-47ceb45995dc.jpg',
    51.5077,
    0.0992,
    '10am - 6pm',
    'Email:  Information@tate.org.uk. Call +44 (0)20 7887 8888',
    ['Southwark']
  ),
];

const createStation = (name, tubeLine) => {
  return { name: name, tubeLine: tubeLine };
};

const stations = [createStation('Acton Town', ['District', 'Piccadilly'])];

export default {
  places,
  stations,
};

// import { getSpreadSheetData } from './spreadsheet.js';

// export const places = [];
// const createPlace = {
//   name: '',
//   description: '',
//   category: [],
//   image: '',
//   lat: '',
//   long: '',
//   openingTimes: '',
//   price: '',
//   contact: '',
//   likes: '',
//   stationName: [],
//   stationId: []
// };

// export const tubes = [];
// const createTubes = {
//   name: '',
//   tubeLine: []
// };

// // Create Tube Data - access it first from google spreadsheet

// const tubeLineData = await getSpreadSheetData('TubeLines');

// for (let i = 1; i < tubeLineData.length; i++) {
//   const rowData = tubeLineData[i];
//   createTubes.name = rowData[0];
//   createTubes.tubeLine = rowData[1].split(' ');

//   tubes[i] = { ...createTubes };
// }

// console.log('TUBE DATA: ', tubes);

// // Create Places Data - access it first from google spreadsheet

// const placesData = await getSpreadSheetData('Places');

// export const createPlacesData = (seededStations) => {
//   for (let i = 1; i < placesData.length; i++) {
//     const rowData = placesData[i];
//     createPlace.name = rowData[0];
//     createPlace.description = rowData[1];
//     createPlace.category = rowData[2].split(' ');
//     createPlace.image = rowData[3];
//     createPlace.lat = parseFloat(rowData[4]);
//     createPlace.long = parseFloat(rowData[5]);
//     createPlace.openingTimes = rowData[6];
//     createPlace.price = rowData[7];
//     createPlace.contact = rowData[8];
//     createPlace.likes = rowData[9];
//     createPlace.stationName = rowData[10].split(', ');
//     createPlace.stationId = [];

//     console.log(createPlace.stationId);

//     for (let i = 0; i < createPlace.stationName.length; i++) {
//       seededStations.filter((item) => {
//         if (createPlace.stationName[i] === item.name) {
//           createPlace.stationId[i] = item._id;
//         }
//       });
//     }

//     places[i] = { ...createPlace };
//   }

//   return places;
// };

// console.log('Places 2: ', places);
