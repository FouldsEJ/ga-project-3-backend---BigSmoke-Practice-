import { getSpreadSheetData } from './spreadsheet.js';

const places = [];
const createPlace = {
  name: 'hello',
  description: '',
  category: '',
  image: '',
  lat: '',
  long: '',
  openingTimes: '',
  price: '',
  contact: '',
  likes: '',
};

const data = await getSpreadSheetData();

for (let i = 1; i < data.length; i++) {
  const rowData = data[i];
  createPlace.name = rowData[0];
  createPlace.description = rowData[1];
  createPlace.category = rowData[2];
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

export default places;
