var expect = require("chai").expect;
var sinon = require("sinon");
var request = require("supertest");
var others = require("../app_server/controllers/others.js");



describe('Tests for each others controller: ', () => {

    describe('about controller', () => {

        it('should call render once', () => {
            var mockReq = null;
            var mockRes = { render: sinon.spy() };

            others.about(mockReq, mockRes);

            expect(mockRes.render.calledOnce).to.be.true;
        });
        
        it('should call render with the generic-text view', () => {
            var mockReq = null;
            var mockRes = { render: sinon.spy() };

            others.about(mockReq, mockRes);

            expect(mockRes.render.calledWith('generic-text')).to.be.true;
        });

    });

});



