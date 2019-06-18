'use strict';

require('dotenv').load();
const express = require('express');
const debug = require('debug')('chow:server');
const mongoose = require('mongoose');

const allRoutes = require('./routes/allRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false });

// ROUTES & MIDDLEWARE
app.use(allRoutes);

const server = module.exports = app.listen(PORT, () => {
  debug(`Chow is running on: ${PORT}`);
});

server.isRunning = true;