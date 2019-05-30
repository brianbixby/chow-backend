'use strict';

const mongoose = require('mongoose');

const favoriteSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
});

module.exports = mongoose.model('favorite', favoriteSchema);