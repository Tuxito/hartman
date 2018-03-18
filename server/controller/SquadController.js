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
    console.log('Creating squad');

    Squad.create({
            name : req.body.squadName            
        }, 
        function (err, squad) {
            if (err) {
                return res.status(500).send("There was a problem adding the information to the database.");
            }

            res.status(200).send(squad);
        });
});

/**
 * Method to retrieve all the squads
 */
router.get('/',function (req, res) {
    console.log('Getting squads list'); 

    Squad.find({}, function (err, squads) {
        if (err) {
            return res.status(500).send("There was a problem retrieving users.");
        }

        res.status(200).send(squads);
    });
});

/**
 * Function to get a squad by id
 */
router.get('/:id', function(req, res, next) {
    console.log('Getting squad ' + req.params.id); 
    Squad.findById(req.params.id, function (err, squad) {
      if (err) return next(err);
      res.json(squad);
    });
});

/**
 * Function to update an existing squad
 */
router.put('/:id', function(req, res){  
    let id = req.params.id;

    Squad.findById(id, function (err, squad) {
        if (err) return handleError(err);
      
        squad.name = req.body.squad.name;
        squad.description = req.body.squad.description;
        console.log('Updating squad : ' + id + " - " + squad.name + " - " + squad.description);

        squad.save(function (err, updatedSquad) {
          if (err) return handleError(err);
          res.send(updatedSquad);
        });
    });
});


module.exports = router;

