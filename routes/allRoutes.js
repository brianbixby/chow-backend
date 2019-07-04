'use strict';

const Router = require('express').Router;
const morgan = require('morgan');
const cors = require('cors');

const bindResponseMethods = require('./../lib/bind-response-methods.js');
const authRouter = require('./user/auth-router.js');
const profileRouter = require('./user/profile-router.js');
const favoriteRouter = require('./favorite/favorite-router.js');
const errors = require('./../lib/error-middleware.js');

const whiteList = [process.env.CORS_ORIGINS, process.env.CORS_ORIGINS2];

module.exports = new Router()
  .use([
    cors({
      credentials: true,
      origin: (origin, cb) => {
        if (whiteList.indexOf(origin) !== -1 || origin === undefined) {
          cb(null, true);
        } else {
          cb(new Error(`${origin} Not allowed by CORS`));
        }
      },
    }),
    morgan('dev'),
    bindResponseMethods,
    authRouter,
    profileRouter,
    favoriteRouter,
    errors,
  ]);