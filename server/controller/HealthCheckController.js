const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var HealthCheck = require('../model/healthCheck');

/**
 * Method to retrieve all the healthchecks
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

router.get('/:id', function(req, res, next) {
    console.log('Getting healthcheck ' + req.params.id); 
    HealthCheck.findById(req.params.id, function (err, healthCheck) {
      console.log("****************")
      console.log(healthCheck);
      console.log("****************")
      if (err) return next(err);
      res.json(healthCheck);
    });
});

/**
 * Method to create a new healthcheck in the database
 */
router.post('/', function (req, res) {
    console.log('Creating healthCheck');
    HealthCheck.create({
            date : req.body.healthCheck.date,
            evaluations : req.body.healthCheck.evaluations
        },
        function (err, healthCheck) {
            if (err) {
                return res.status(500).send("There was a problem adding the information to the database.");
            }

            res.status(200).send(healthCheck);
        });
});

module.exports = router;