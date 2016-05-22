var expect = require("chai").expect;
var sinon = require("sinon");
var request = require("supertest");
var locations = require("../app_server/controllers/others.js");



describe('Tests for each controller in others', () => {

    describe('Test the about controller', () => {

        it('should call render once', () => {
            var mockReq = null;
            var mockRes = { render: sinon.spy() };

            locations.about(mockReq, mockRes);

            expect(mockRes.render.calledOnce).to.be.true;
        });

    });

});



