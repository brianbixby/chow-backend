'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const debug = require('debug')('chow:profile');
const createError = require('http-errors');

const profileSchema = mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
  username: {type: String, required: true },
  image: String,
  createdOn: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now },
  favorites: [{type: mongoose.Schema.Types.ObjectId, ref: 'league'}],
  tags: [ String ],
});

const Profile = module.exports = mongoose.model('profile', profileSchema);

Profile.findByuserIDAndFavorite = function(uid, fid) {
  debug('findByuserIDAndFavorite');

  return Profile.findOneAndUpdate({ userID: uid }, { $push: { favorites: fid }}, {new: true})
    .catch( err => Promise.reject(createError(404, err.message)));
};