var mongooseConnection = require('mongoose');

var mongoDB = 'mongodb://localhost/hartman';
mongooseConnection.connect(mongoDB);

mongooseConnection.connection.on('connected', function () {  
    console.log('Mongoose default connection open to ' + mongoDB);
  }); 

mongooseConnection.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
}); 

mongooseConnection.connection.on('disconnected', function () {  
    console.log('Mongoose default connection disconnected'); 
});

process.on('SIGINT', function() {  
    mongooseConnection.connection.close(function () { 
      console.log('Mongoose default connection disconnected through app termination'); 
      process.exit(0); 
    }); 
  }); 

module.exports = mongooseConnection;