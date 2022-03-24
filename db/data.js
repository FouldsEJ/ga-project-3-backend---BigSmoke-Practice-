import { getSpreadSheetData } from './spreadsheet.js';

export const places = [];
const createPlace = {
  name: 'hello',
  description: '',
  category: [],
  image: '',
  lat: '',
  long: '',
  openingTimes: '',
  price: '',
  contact: '',
  likes: '',
};

export const tubes = [];
const createTubes = {
  name: '',
  tubeLine: [],
  // places: '',
};

const tubeLineData = await getSpreadSheetData('TubeLines');

for (let i = 1; i < tubeLineData.length; i++) {
  const rowData = tubeLineData[i];
  createTubes.name = rowData[0];
  createTubes.tubeLine = rowData[1].split(' ');

  tubes[i] = { ...createTubes };
}

console.log('TUBE DATA: ', tubes);

const placesData = await getSpreadSheetData('Places');

// console.log(placesData);

for (let i = 1; i < placesData.length; i++) {
  const rowData = placesData[i];
  createPlace.name = rowData[0];
  createPlace.description = rowData[1];
  createPlace.category = rowData[2].split(' ');
  createPlace.image = rowData[3];
  createPlace.lat = parseFloat(rowData[4]);
  createPlace.long = parseFloat(rowData[5]);
  createPlace.openingTimes = rowData[6];
  createPlace.price = rowData[7];
  createPlace.contact = rowData[8];
  createPlace.likes = rowData[9];

  places[i] = { ...createPlace };
}

console.log('Places 2: ', places);
