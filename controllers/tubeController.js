import 'Station' from '../models/station.js';

const getAllStations = async (req, res, next) => {
  try {
    const station = await Station.find();
  return res.status(200).json(station);
}
catch (err) {
  next(err);
}
};

const getStationById = async (req, res) => {
  const station = await Station.findById(req.params.id);
 !station ? res.status(404) : res.status(200).json(station)



}

export default {
  getAllStations,
  getStationById
}