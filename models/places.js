import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true, maxlength: 300 },
    rating: { type: Number, required: true, min: 1, max: 5 },
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

const placesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: {
    type: Array
  },
  image: { type: String, required: true },
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  reviews: [reviewSchema],
  openingTimes: { type: String },
  price: { type: Number },
  contact: { type: String },
  likes: { type: Number },
  station: [{ type: mongoose.Schema.ObjectId, ref: 'Station' }]
});
export default mongoose.model('Places', placesSchema);
