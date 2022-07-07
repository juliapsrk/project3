'use strict';

const mongoose = require('mongoose');
const { isEmail } = require('validator');

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
      minlength: [4, 'Minimum Name length is 4 characters'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: [true, ' That email is already registered'],
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email'],
      trim: true
    },
    passwordHashAndSalt: {
      type: String,
      required: [true, 'Please enter an email'],
      minlength: [6, 'Minimum Password length is 6 characters']
    },
    description: {
      type: String,
      maxLength: 5000,
      trim: true
    },
    userType: {
      type: String,
      required: true,
      default: 'private',
      enum: ['private', 'center']
    },
    picture: {
      type: String
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', schema);

module.exports = User;
