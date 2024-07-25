import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  publishedYear: {
    type: Date,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
const book = mongoose.model('Book', bookSchema);
export default book;