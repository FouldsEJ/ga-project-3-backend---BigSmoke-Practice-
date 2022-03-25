import { getSpreadSheetData } from './spreadsheet.js';

export const places = [];
const createPlace = {
  name: '',
  description: '',
  category: [],
  image: '',
  lat: '',
  long: '',
  openingTimes: '',
  price: '',
  contact: '',
  likes: '',
  stationName: [],
  stationId: []
};

export const tubes = [];
const createTubes = {
  name: '',
  tubeLine: []
};

// Create Tube Data - access it first from google spreadsheet

const tubeLineData = await getSpreadSheetData('TubeLines');

for (let i = 1; i < tubeLineData.length; i++) {
  const rowData = tubeLineData[i];
  createTubes.name = rowData[0];
  createTubes.tubeLine = rowData[1].split(' ');

  tubes[i] = { ...createTubes };
}

console.log('TUBE DATA: ', tubes);

// Create Places Data - access it first from google spreadsheet

const placesData = await getSpreadSheetData('Places');

export const createPlacesData = (seededStations) => {
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
    createPlace.stationName = rowData[10].split(', ');
    createPlace.stationId = [];

    console.log(createPlace.stationId);

    for (let i = 0; i < createPlace.stationName.length; i++) {
      seededStations.filter((item) => {
        if (createPlace.stationName[i] === item.name) {
          createPlace.stationId[i] = item._id;
        }
      });
    }

    places[i] = { ...createPlace };
  }

  return places;
};

console.log('Places 2: ', places);
