var mongoose = require('mongoose');  

var SquadSchema = new mongoose.Schema({  
  name: { type: String, required: true },
  description : String,
});

mongoose.model('Squad', SquadSchema);
module.exports = mongoose.model('Squad');