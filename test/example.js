var expect = require("chai").expect;
var request = require("supertest");
var app = require("../app");

describe('test routes', () => {

    it('home page should respond with 200', (done) => {
        request(app)
            .get('/')
            .expect(200, done);
    });

});