const { Schema, model } = require('mongoose');

const newsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true, 
    minlength: 1
  },
  url: {
    type: String,
    required: true
  },
  urlToImage: {
    type: String,
    required: true,
  },
});

const News = model('News', newsSchema);

module.exports = News;