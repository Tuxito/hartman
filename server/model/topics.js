var mongoose = require('mongoose');  

var TopicSchema = new mongoose.Schema({  
  name: { type: String, required: true },
  description : String,
  active : Boolean
});

mongoose.model('Topics', TopicSchema);
module.exports = mongoose.model('Topics');