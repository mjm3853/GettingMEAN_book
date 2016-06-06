var expect = require("chai").expect;
var sinon = require("sinon");
var request = require("supertest");
var app = require("../app");

describe('Tests for the API routes', () => {

    describe('locations routes', () => {
        it('GET api at /locations should respond with 200', (done) => {
            request(app)
                .get('/api/locations')
                .expect(200, done);
        });

        it('POST api at /locations should respond with 200', (done) => {
            request(app)
                .post('/api/locations')
                .expect(200, done);
        });

        it('GET api at /locations/:locationid should respond with 200', (done) => {
            request(app)
                .get('/api/locations/000')
                .expect(200, done);
        });

        it('PUT api at /locations/:locationid should respond with 404', (done) => {
            request(app)
                .put('/api/locations/000')
                .expect(200, done);
        });

        it('POST api at /locations/:locationid should respond with 404', (done) => {
            request(app)
                .post('/api/locations/000')
                .expect(404, done);
        });

        it('DELETE api at /locations/:locationid should respond with 404', (done) => {
            request(app)
                .delete('/api/locations/000')
                .expect(200, done);
        });

    });
    
    
    /*
    
router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);
    
    */
    
    describe('reviews routes', () => {
        
        it('POST api at /locations/:locationid/reviews should respond with 200', (done) => {
            request(app)
                .post('/api/locations/000/reviews')
                .expect(200, done);
        });
        
        it('GET api at /locations/:locationid/reviews/:reviewid should respond with 200', (done) => {
            request(app)
                .get('/api/locations/000/reviews/000')
                .expect(200, done);
        });
        
        it('PUT api at /locations/:locationid/reviews/:reviewid should respond with 200', (done) => {
            request(app)
                .put('/api/locations/000/reviews/000')
                .expect(200, done);
        });
        
        it('DELETE api at /locations/:locationid/reviews/:reviewid should respond with 200', (done) => {
            request(app)
                .delete('/api/locations/000/reviews/000')
                .expect(200, done);
        });
        
        it('POST api at /locations/:locationid/reviews/:reviewid should respond with 404', (done) => {
            request(app)
                .post('/api/locations/000/reviews/000')
                .expect(404, done);
        });
        
        
            
    });
        


});
