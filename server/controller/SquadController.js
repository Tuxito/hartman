const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Squad = require('../model/squad');

/**
 * Method to create a new squad in the database
 */
router.post('/', function (req, res) {
    console.log('creating squad');

    Squad.create({
            name : req.body.squadName            
        }, 
        function (err, user) {
            if (err) {
                return res.status(500).send("There was a problem adding the information to the database.");
            }

            res.status(200).send(user);
        });
});

/**
 * Method to retrieve all the squads
 */
router.get('/',function (req, res) {
    console.log('getting squads list'); 

    Squad.find({}, function (err, squads) {
        if (err) {
            return res.status(500).send("There was a problem retrieving users.");
        }

        res.status(200).send(squads);
    });
});

module.exports = router;

