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
    stationName: stationName
  };
};

const places = [
  createPlace(
    'Tower Of London',
    "The Tower of London is an internationally famous monument and one of England's most iconic structures.",
    ['arts/culture'],
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
    ['arts/culture'],
    'https://a.cdn-hotels.com/gdcs/production161/d329/1dd2958c-c93e-486a-a7ad-47ceb45995dc.jpg',
    51.5077,
    0.0992,
    '10am - 6pm',
    'Email:  Information@tate.org.uk. Call +44 (0)20 7887 8888',
    ['Southwark']
  createPlace(
    'Victoria and Albert Museum',
    " The Victoria and Albert Museum was founded with a mission: to educate designers, manufacturers and the public in art and design. Its origins lie in the Great Exhibition of 1851 – the world's first international display of design and manufacturing.",
    ['arts/culture'],
    'https://cdn.theculturetrip.com/wp-content/uploads/2018/12/va_exterior_may_2012_c_victoria_and_albert_museum_london_med-e1547138131536-1024x566.jpg',
    51.4966,
    0.1722,
    '10am - 5:45pm ',
    'Tel: +44 (0)20 7942 2000',
    [' South Kensington']
  ),
  createPlace(
    'Covent Garden',
    'Covent Garden is a world-class shopping and dining destination attracting food-lovers and fashionistas alike. Buzzing with the excitement of the opera and theatreland, the area boasts some of the best shopping and dining destinations in London West End , from Mulberry to Petersham Nurseries and Balthazar to Frenchie.',
    ['shopping', 'entertainment'],
    'https://vespergroup.co.uk/wp-content/uploads/maxresdefault.jpg',
    51.5117,
    0.124,
    ' ',
    'Telephone:  0207 240-9921',
    ['Covent Garden']
  ),
  createPlace(
    'Harrods',
    'The present Harrods building, constructed in 1905, houses roughly 300 departments, 20 restaurants, a bank, and a beauty salon. Although the store still sells gourmet food items, its emphasis is on high-fashion clothing. Known for its zealous customer service, Harrods is considered the best department store in Britain.',
    ['shopping', 'entertainment'],
    'https://www.p.city-walks.info/London/Harrods-London-Hans-Crescent.jpg',
    51.4994,
    0.1632,
    'Monday - Wednesday: 11am - 7pm Thursday - Saturday: 11am - 8pm Sunday: 11.30am - 6pm',
    'Phone: 020 7730 1234',
    ['Knightsbridge']
  ),
  createPlace(
    'Southbank Centre',
    'Southbank Centre is a complex of artistic venues in London, England, on the South Bank of the River Thames. It comprises three main performance venues, together with the Hayward Gallery, and is Europes largest centre for the arts.',
    ['arts/culture'],
    'https://d33hx0a45ryfj1.cloudfront.net/additional/Dynamic/media/189ff8d6400ce20c',
    51.5061,
    0.1163,
    'Mondays and Tuesdays 10am - 6pm Wednesdays - Sundays 10am -   11pm',
    'E-mail : hello@southbankcentre.co.uk Telephone : 020 3879 9555',
    ['Waterloo']
  ),
];
};

const stations = [createStation('Acton Town', ['District', 'Piccadilly'])];

export default {
  places,
  stations
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
