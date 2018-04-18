const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var HealthCheck = require('../model/healthCheck');

/**
 * Method to retrieve all the squads
 */
router.get('/',function (req, res) {
    console.log('Getting healthcheck list'); 

    HealthCheck.find({}, function (err, healthChecks) {
        if (err) {
            return res.status(500).send("There was a problem retrieving healthChecks.");
        }

        res.status(200).send(healthChecks);
    });
});

/**
 * Method to create a new squad in the database
 */
router.post('/', function (req, res) {
    console.log('Creating healthCheck');
    console.log(req.body.healthCheck.evaluations);

    HealthCheck.create({
            date : req.body.healthCheck.date,
            ev : req.body.healthCheck.evaluations
        },
        function (err, healthCheck) {
            if (err) {
                return res.status(500).send("There was a problem adding the information to the database.");
            }

            res.status(200).send(healthCheck);
        });
});

module.exports = router;