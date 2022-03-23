import mongoose from 'mongoose';

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
        'food/drink'
      ],
      message: 'Please pick a correct category'
    }
  },
  image: { type: String, required: true },
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  comment: [reviewSchema],
  openingTimes: { type: Number },
  price: { type: Number },
  contact: { type: String },
  likes: { type: Number }
});

const reviewSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true, maxlength: 300 },
    rating: { type: Number, required: true, min: 1, max: 5 }
  },
  { timestamps: true }
);
export default mongoose.model('Places', placesSchema);
