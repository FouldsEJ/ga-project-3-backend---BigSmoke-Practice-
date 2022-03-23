import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true, maxlength: 300 },
    rating: { type: Number, required: true, min: 1, max: 5 },
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

const placesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, maxlength: 300 },
  category: {
    type: String,
    enum: {
      values: [
        'arts/culture',
        'entertainment',
        'shopping',
        'outdoors',
        'food/drink',
      ],
      message: 'Please pick a correct category',
    },
  },
  image: { type: String, required: true },
  lat: { type: String, required: true },
  long: { type: String, required: true },
  comment: [reviewSchema],
  openingTimes: { type: String },
  price: { type: Number },
  contact: { type: String },
  likes: { type: Number },
});
export default mongoose.model('Places', placesSchema);
