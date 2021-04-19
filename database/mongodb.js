var mongoose = require('mongoose');
//require chalk module to give colors to console text

var options = {
				useNewUrlParser: true,
				useUnifiedTopology: true
			};
            
// var dbURL = 'mongodb://localhost:27017/test-node?readPreference=primary&ssl=false';
// var dbURL = 'mongodb+srv://root:FeUwJS6kPTg5Rm6@cluster0.xzm6v.mongodb.net/test_node?retryWrites=true&w=majority';

var dbURL = process.env.MONGO_URL

//export this function and imported by server.js
console.log("Mongoose connection is about to start ", dbURL);

mongoose.connect(dbURL,options);

mongoose.connection.on('connected', function(){
    console.log("Mongoose default connection is open to ", dbURL);
});

mongoose.connection.on('error', function(err){
    console.log("Mongoose default connection has occured "+err+" error");
});

mongoose.connection.on('disconnected', function(){
    console.log("Mongoose default connection is disconnected");
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0)
    });
});

module.exports = mongoose.connection;