var expect = require("chai").expect;
var mongoose = require("mongoose");

var common = require('../common');
var config = common.config();

var dbURI = config.db;

describe('DB connection tests', () => {

    it('should be able to connect to the database', () => {
        expect(mongoose.Connection.STATES.connected === mongoose.connection.readyState).to.be.true;
    });

});

