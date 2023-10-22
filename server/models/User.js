// create models

const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  posts: [
    {
        type: Schema.Types.ObjectId,
        ref: "Post"
    }
  ],
  products: [
    {
        type: Schema.Types.ObjectId,
        ref: "Product"
    }
  ]
});

const User = model('User', userSchema);

module.exports = User;
