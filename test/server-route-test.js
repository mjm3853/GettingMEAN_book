var expect = require("chai").expect;
var request = require("supertest");
var app = require("../app");

describe('Tests for the server routes', () => {


    describe('home page route', () => {
        it('GET home page should respond with 200', (done) => {
            request(app)
                .get('/')
                .expect(200, done);
        });

        it('POST home page should respond with 404', (done) => {
            request(app)
                .post('/')
                .expect(404, done);
        });
    });


    describe('about page route', () => {
        it('GET about page should respond with 200', (done) => {
            request(app)
                .get('/about')
                .expect(200, done);
        });

        it('POST about page should respond with 404', (done) => {
            request(app)
                .post('/about')
                .expect(404, done);
        });
    });


    describe('location info page route', () => {
        it('GET location page should respond with 200', (done) => {
            request(app)
                .get('/location')
                .expect(200, done);
        });

        it('POST location page should respond with 404', (done) => {
            request(app)
                .post('/location')
                .expect(404, done);
        });
    });


    describe('add location review info page route', () => {
        it('GET review new location page should respond with 200', (done) => {
            request(app)
                .get('/location/review/new')
                .expect(200, done);
        });

        it('POST review new location page should respond with 404', (done) => {
            request(app)
                .post('/location/review/new')
                .expect(404, done);
        });
    });
});