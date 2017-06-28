var user = require('./../user');

module.exports = {
    getName: function(req, res) {
        res.json({name: user.name});
    },
    getLocation: function (req, res) {
        res.json({location: user.location});
    },
    getOcc: function (req, res) {
        res.json({occupations: user.occupations});
    }
}