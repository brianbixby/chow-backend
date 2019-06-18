'use strict';

const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
  username: {type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now },
  favorites: [{type: mongoose.Schema.Types.ObjectId, ref: 'favorite'}],
  image: String,
  country: { type: String, uppercase: true },
  state: { type: String, uppercase: true },
});

module.exports = mongoose.model('profile', profileSchema);
