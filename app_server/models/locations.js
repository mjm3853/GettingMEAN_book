var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    name: String,
    address: String,
    rating: {type: Number, "default": 0, min: 0, max: 5},
    facilities: [String],
    coords: {type: [Number], index: '2dsphere'};
});

var openingTimeSchema = new mongoose.Schema({
   days: {type: String, required: true},
   opening: String,
   closing: String,
   closed: {type: Boolean, required: true} 
});

