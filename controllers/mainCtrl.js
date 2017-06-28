var user = require('./../user');

module.exports = {
    getName: function (req, res) {
        res.json({name: user.name});
    },
    getLocation: function (req, res) {
        res.json({location: user.location});
    },
    getOcc: function (req, res) {
        if (req.query.order === "desc") {
            res.json({ occupations: user.occupations.sort() });
        }
        else if (req.query.order === "asc") {
            res.json({ occupations: user.occupations.reverse() });
        }
        else {
            res.json({occupations: user.occupations});
        }
    },
    latestOcc: function (req, res) {
        res.json({latestOccupation: user.occupations[user.occupations.length -1]});
    },
    getHobbies: function (req, res) {
        res.json({hobbies: user.hobbies});
    },
    getHobbiesByType: function (req, res) {
        var result = user.hobbies.filter( val => val.type === req.params.type );
        res.json(result);
    },
    getFamily: function (req, res) {
        if (req.query.relation) {
            result = user.family.filter( val => val.relation === req.query.relation );
            res.json(result);
        }
        else {
            res.json({family: user.family});
        }
    },
    getRestaurants: function (req, res) {
        if (req.query.rating) {
            result = user.restaurants.filter( val => val.rating >= req.query.rating);
            res.json(result);
        }
        else {
            res.json({restaurants: user.restaurants});
        }
    }, getRestaurantsByName: function (req, res) {
        result = user.restaurants.filter( val => val.name === req.params.name);
        res.json(result);
    },

}