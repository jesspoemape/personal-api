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
app.get('/occupations/latest', mainCtrl.latestOcc);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/family', mainCtrl.getFamily);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName);

app.put('/name/:name', mainCtrl.updateName);
app.put('/location/:loc', mainCtrl.updateLocation);

app.post('/hobbies/:hobby/:type', mainCtrl.addHobby);
app.post('/occupations/:occ', mainCtrl.addOcc);
app.post('/family/:name/:gender/:relation', mainCtrl.addFamily);
app.post('/restaurants/:name/:type/:rating', mainCtrl.addRestaurant);

app.get('/skillz', mainCtrl.getSkillz);
app.post('/skillz/:skill/:experience', middleware.generateId, mainCtrl.addSkill);

// =====================================

app.listen(3000, () => {
    console.log("Listening on port 3000");
})