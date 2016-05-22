var expect = require("chai").expect;
var sinon = require("sinon");
var request = require("supertest");
var locations = require("../app_server/controllers/locations.js");

describe('Test the locations controller', () => {


    it('should call render once', () => {
        var mockReq = null;
        var mockRes = { render: sinon.spy() };

        locations.homelist(mockReq, mockRes);

        expect(mockRes.render.calledOnce).to.be.true;
    });




});