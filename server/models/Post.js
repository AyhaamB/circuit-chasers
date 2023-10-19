const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: Text,
    required: true,
    trim: true, 
    minlength: 1
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
  author: [
    {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Post = model('Post', postSchema);

module.exports = Post;