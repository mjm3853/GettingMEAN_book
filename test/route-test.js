var expect = require("chai").expect;
var request = require("supertest");
var app = require("../app");

describe('Test the routes', () => {

    it('home page should respond with 200', (done) => {
        request(app)
            .get('/')
            .expect(200, done);
    });


    it('about page should respond with 200', (done) => {
        request(app)
            .get('/about')
            .expect(200, done);
    });

    it('location page should respond with 200', (done) => {
        request(app)
            .get('/location')
            .expect(200, done);
    });

    it('review new location page should respond with 200', (done) => {
        request(app)
            .get('/location/review/new')
            .expect(200, done);
    });
});