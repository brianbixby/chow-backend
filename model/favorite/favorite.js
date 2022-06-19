'use strict';

const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  calories: { type: String, required: true },
  dietLabels: [{type: String}],
  digest: [{type: mongoose.Schema.Types.Mixed}],
  healthLabels: [{type: String}],
  image: { type: String, required: true },
  ingredientLines: [{ type: String, required: true }],
  label: { type: String, required: true },
  source: { type: String, required: true },
  yield: { type: String, required: true },
  url: { type: String, required: true },
  uri: { type: String, required: true },
});

module.exports = mongoose.model('favorite', favoriteSchema);
