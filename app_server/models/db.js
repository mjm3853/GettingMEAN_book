var mongoose = require('mongoose');

var common = require('../../common');
var config = common.config();

var dbURI = config.db;

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
   console.log('Mongoose connected to ' + dbURI); 
});

mongoose.connection.on('error', (err) => {
   console.log('Mongoose connection error: ' + err); 
});

mongoose.connection.on('disconnected', () => {
   console.log('Mongoose disconnected from ' + dbURI); 
});

