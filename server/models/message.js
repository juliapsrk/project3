'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  content: {
    type: String,
    trim: true,
    required: [true, 'Please enter a message'],
    minlength: [1, 'Minimum Message length is 1 character'],
    maxlength: [5000, 'Maximum Message length is 5000 characters']
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const Message = mongoose.model('Message', schema);

module.exports = Message;
