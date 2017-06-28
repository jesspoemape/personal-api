const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./controllers/middleware.js');
const mainCtrl = require('./controllers/mainCtrl');

const app = express();

app.use(bodyParser.json());