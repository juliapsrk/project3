const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      maxLength: 5000,
      trim: true
    },
    type: {
      type: String,
      enum: ['petForAdoption', 'lookingForPet'],
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', schema);

module.exports = Post;
