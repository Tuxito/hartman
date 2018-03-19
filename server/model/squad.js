var mongoose = require('mongoose');  

var SquadSchema = new mongoose.Schema({  
  name: { type: String, required: true },
  description : String,
});

mongoose.model('SquadSchema', SquadSchema);
module.exports = mongoose.model('SquadSchema');