import mongoose from 'mongoose';

const stationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tubeLine: { type: Array },
  places: [{ type: mongoose.Schema.ObjectId, ref: 'Places' }],
});

export default ('Station', stationSchema);
