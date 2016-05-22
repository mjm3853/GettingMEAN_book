var expect = require("chai").expect;
var sinon = require("sinon");
var request = require("supertest");
var locations = require("../app_server/controllers/locations.js");



describe('Tests for each controller in locations', () => {

    describe('Test the locations list controller', () => {

        it('should call render once', () => {
            var mockReq = null;
            var mockRes = { render: sinon.spy() };

            locations.homelist(mockReq, mockRes);

            expect(mockRes.render.calledOnce).to.be.true;
        });

    });

    describe('Test the location info controller', () => {

        it('should call render once', () => {
            var mockReq = null;
            var mockRes = { render: sinon.spy() };

            locations.locationInfo(mockReq, mockRes);

            expect(mockRes.render.calledOnce).to.be.true;
        });

    });
    
        describe('Test the add location review controller', () => {

        it('should call render once', () => {
            var mockReq = null;
            var mockRes = { render: sinon.spy() };

            locations.addReview(mockReq, mockRes);

            expect(mockRes.render.calledOnce).to.be.true;
        });

    });

});



