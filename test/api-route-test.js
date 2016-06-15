var expect = require("chai").expect;
var sinon = require("sinon");
var request = require("supertest");
var app = require("../app");

describe('Tests for the API routes', () => {

    describe('locations routes', () => {
        it('GET api at /locations without lat and lng should respond with 404', (done) => {
            request(app)
                .get('/api/locations')
                .expect(404, done);
        });
        
        it('GET api at /locations/:locationid with an invalid location id should respond with 404', (done) => {
            request(app)
                .get('/api/locations/000')
                .expect(404, done);
        });

        it('PUT api at /locations/:locationid should respond with 404', (done) => {
            request(app)
                .put('/api/locations/000')
                .expect(404, done);
        });

        it('POST api at /locations/:locationid should respond with 404', (done) => {
            request(app)
                .post('/api/locations/000')
                .expect(404, done);
        });

        it('DELETE api at /locations/:locationid should respond with 404', (done) => {
            request(app)
                .delete('/api/locations/000')
                .expect(404, done);
        });

    });

    describe('reviews routes', () => {

        it('POST api at /locations/:locationid/reviews with invalid request should respond with 400', (done) => {
            request(app)
                .post('/api/locations/000/reviews')
                .expect(400, done);
        });

        it('GET api at /locations/:locationid/reviews/:reviewid with invalid id should respond with 404', (done) => {
            request(app)
                .get('/api/locations/000/reviews/000')
                .expect(404, done);
        });

        it('PUT api at /locations/:locationid/reviews/:reviewid with invalid info should respond with 404', (done) => {
            request(app)
                .put('/api/locations/000/reviews/000')
                .expect(404, done);
        });

        it('DELETE api at /locations/:locationid/reviews/:reviewid with invalid info should respond with 404', (done) => {
            request(app)
                .delete('/api/locations/000/reviews/000')
                .expect(404, done);
        });

        it('POST api at /locations/:locationid/reviews/:reviewid should respond with 404', (done) => {
            request(app)
                .post('/api/locations/000/reviews/000')
                .expect(404, done);
        });



    });



});
