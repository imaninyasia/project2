require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const homeRoute = require('./routes/home');
// const { findPets } = require('./services/petFinder');

const app = express();

const port = process.env.PORT || process.argv[2] || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('listening on port', port));

app.use('/', homeRoute);
