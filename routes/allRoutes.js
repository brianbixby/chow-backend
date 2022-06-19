'use strict';

const Router = require('express').Router;

const authRouter = require('./user/auth-router.js');
const profileRouter = require('./user/profile-router.js');
const favoriteRouter = require('./favorite/favorite-router.js');
const errors = require('./../lib/error-middleware.js');

module.exports = new Router()
  .use([
    // ROUTERS
    authRouter,
    profileRouter,
    favoriteRouter,
    // ERROR HANDLERS
    errors,
  ]);