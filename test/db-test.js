var expect = require("chai").expect;
var mongoose = require("mongoose");

var gracefulShutdown = require("../app_server/models/db");

var common = require('../common');
var config = common.config();

var dbURI = config.db;

describe('DB connection tests', () => {

    it('should be able to connect to the database', () => {
        expect(mongoose.Connection.STATES.connected === mongoose.connection.readyState).to.be.true;
    });

});


describe('DB helper function tests', () => {
    it('should check gracefulShutdown for message and callback', () => {
        gracefulShutdown("test", () => {console.log("test huh")});
        expect(mongoose.Connection.STATES.connected === mongoose.connection.readyState).to.be.false;
    })
});


