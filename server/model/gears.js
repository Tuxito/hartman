var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gearSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    profileImage: String
  });

  var Gear = mongoose.model('Gears', gearSchema);
  module.exports = mongoose.model('Gears');