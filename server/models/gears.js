var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gearSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    profileImage: String
  });

  var Gear = mongoose.model('gears', gearSchema);
  
  // make this available to our users in our Node applications
  module.exports = Gear;