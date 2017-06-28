const user = require('./../user');
const skillz = require('./../skillz');
const secrets = require('./../secrets');

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
        if (req.query.name) {
            result = user.hobbies.filter( val => val.name === req.query.name ); 
                res.json(result);
        }
        else {
            res.json({hobbies: user.hobbies});
        }
        
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

    updateName: function (req, res) {
        user.name = req.params.name;
        res.json({name: user.name});
    },
    updateLocation: function (req, res) {
        user.location = req.params.loc;
        res.json({location: user.location});
    },

    addHobby: function (req, res) {
        user.hobbies.push({name: req.params.hobby, type: req.params.type});
        res.json(user.hobbies);
    },
    addOcc: function (req, res) {
        user.occupations.push(req.params.occ);
        res.json(user.occupations);
    },
    addFamily: function (req, res) {
        user.family.push({name: req.params.name, relation: req.params.relation, gender: req.params.gender});
        res.json(user.family);
    },
    addRestaurant: function (req, res) {
        user.restaurants.push({name: req.params.name, type: req.params.type, rating: req.params.rating});
        res.json(user.restaurants);
    },

    getSkillz: function (req, res) {
        if (req.query.experience) {
            result = skillz.work.filter( val => val.experience === req.query.experience);
            res.json(result);
        }
        else {
            res.json({skills: skillz.work});
        }
    },
    addSkill: function (req, res) {
        skillz.work.push({id: req.body.id, name: req.params.skill, experience: req.params.experience});
        res.json(skillz.work);
    },
    getSecrets: function (req, res) {
        res.json(secrets);
    }

}