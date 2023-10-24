const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true, 
    minlength: 1,
    maxlength: 200
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true,
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
  team: {
    type: String
  },
  category: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Product = model('Product', productSchema);

module.exports = Product;