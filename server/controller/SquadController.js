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
    // TODO : Finish update operation
    console.log('Updating squad ' + req.body.squad.description);  
    Squad.findByIdAndUpdate({},{}); 
    res.status(200);  
});


module.exports = router;

