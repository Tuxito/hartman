var mongoose = require('mongoose');  

var SquadSchema = new mongoose.Schema({  
  name: String
});

mongoose.model('SquadSchema', SquadSchema);
module.exports = mongoose.model('SquadSchema');