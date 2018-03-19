const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Topic = require('../model/topics');

/**
 * Method to retrieve all the squads
 */
router.get('/',function (req, res) {
    console.log('Getting topics list'); 

    Topic.find({}, function (err, topics) {
        if (err) {
            return res.status(500).send("There was a problem retrieving topics.");
        }

        res.status(200).send(topics);
    });
});

/**
 * Method to create a new squad in the database
 */
router.post('/', function (req, res) {
    console.log('Creating topic');

    Topic.create({
            name : req.body.name,
            description : req.body.description             
        }, 
        function (err, topic) {
            if (err) {
                return res.status(500).send("There was a problem adding the information to the database.");
            }

            res.status(200).send(topic);
        });
});