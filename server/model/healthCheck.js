var mongoose = require('mongoose');  

var HealthCheckSchema = new mongoose.Schema({  
    date : Date,
    evaluations : [{
        topic : String,
        ev : [{
            squad : String,
            score : Number
        }]
    }]
});
  
mongoose.model('HealthChecks', HealthCheckSchema);
module.exports = mongoose.model('HealthChecks');
