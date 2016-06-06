var expect = require("chai").expect;
var mongoose = require("mongoose");

var gracefulShutdown = require("../app_api/models/db");

var dbURI = "mongodb://localhost/Loc8r";
if (process.env.NODE_ENV === "production") {
    dbURI = process.env.MONGODB_URI;
}

describe('Tests for DB connection', () => {
    it('should be able to connect to the database', () => {
        expect(mongoose.Connection.STATES.connected === mongoose.connection.readyState).to.be.true;
    });
});

describe('Tests for DB helper functions', () => {
    it('should check gracefulShutdown for message and callback', () => {
        gracefulShutdown("test", () => { console.log("should log after db closes") });
        expect(mongoose.Connection.STATES.connected === mongoose.connection.readyState).to.be.false;
    })
});


