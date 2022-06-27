'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['dog', 'cat', 'rabbit', 'bird', 'reptile', 'fish', 'other'],
      required: true
    },
    breed: {
      type: String,
      trim: true,
      default: true
    },
    age: {
      type: Number,
      min: 0
    },
    location: {
      type: {
        type: String,
        default: 'Point'
      },
      coordinates: [Number]
    },
    listed: {
      type: Boolean,
      required: true
    },
    adopted: {
      // adopted vs upForAdoption
      type: Boolean,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
      // required: true
    },
    description: {
      type: String,
      maxLength: 5000,
      trim: true
    },
    picture: [
      {
        type: String
      }
    ]
  },
  { timestamps: true }
);

const Pet = mongoose.model('Pet', schema);

module.exports = Pet;
