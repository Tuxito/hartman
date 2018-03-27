const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Gear = require('../model/gears');

/**
 * Method to retrieve all the gears
 */
router.get('/',function (req, res) {
    console.log('Getting gears list'); 

    Gear.find({}, function (err, gears) {
        if (err) {
            return res.status(500).send("There was a problem retrieving gears.");
        }

        res.status(200).send(gears);
    });
});

module.exports = router;