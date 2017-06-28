const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./../controllers/middleware');
const mainCtrl = require('./../controllers/mainCtrl');

const app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

//=============== ENDPOINTS

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOcc);


// =====================================

app.listen(3000, () => {
    console.log("Listening on port 3000");
})