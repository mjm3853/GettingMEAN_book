var expect = require("chai").expect;
var sinon = require("sinon");
var request = require("supertest");
var locations = require("../app_server/controllers/locations.js");



describe('Tests for each locations controller: ', () => {

    describe('locations list controller', () => {

        it('should call render once', () => {
            var mockReq = null;
            var mockRes = { render: sinon.spy() };

            locations.homelist(mockReq, mockRes);

            expect(mockRes.render.calledOnce).to.be.true;
        });

        it('should call render with the location-list view', () => {
            var mockReq = null;
            var mockRes = { render: sinon.spy() };

            locations.homelist(mockReq, mockRes);

            expect(mockRes.render.calledWith('locations-list')).to.be.true;
        });

    });

    describe('Test the location info controller', () => {

        it('should call render once', () => {
            var mockReq = null;
            var mockRes = { render: sinon.spy() };

            locations.locationInfo(mockReq, mockRes);

            expect(mockRes.render.calledOnce).to.be.true;
        });

        it('should call render with the location-info view', () => {
            var mockReq = null;
            var mockRes = { render: sinon.spy() };

            locations.locationInfo(mockReq, mockRes);

            expect(mockRes.render.calledWith('location-info')).to.be.true;
        });

    });

    describe('Test the add location review controller', () => {

        it('should call render once', () => {
            var mockReq = null;
            var mockRes = { render: sinon.spy() };

            locations.addReview(mockReq, mockRes);

            expect(mockRes.render.calledOnce).to.be.true;
        });

        it('should call render with the location-review-form view', () => {
            var mockReq = null;
            var mockRes = { render: sinon.spy() };

            locations.addReview(mockReq, mockRes);

            expect(mockRes.render.calledWith('location-review-form')).to.be.true;
        });

    });

});



