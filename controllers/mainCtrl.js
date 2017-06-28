var user = require('./../user');

module.exports = {
    getName: function (req, res) {
        res.json({name: user.name});
    },
    getLocation: function (req, res) {
        res.json({location: user.location});
    },
    getOcc: function (req, res) {
        res.json({occupations: user.occupations});
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
    }
}