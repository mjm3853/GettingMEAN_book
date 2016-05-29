var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var crtlReviews = require('../controllers/reviews');

//locations
router.get('./locations', ctrlLocations.locationsListByDistance);
router.post('./locations', ctrlLocations.locationsCreate);
router.get('./locations/:locationid', ctrlLocations.locationReadOne);
router.put('./locations/:locationid', ctrlLocations.locationsUpdateOne);
router.delete('./locations/:locationid', ctrlLocations.locationsDeleteOne);

//reviews
router.post('./locations/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('./locations/:locationid/reviews/:reviewod', ctrlReviews.reviewsReadOne);
router.put('./locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('./locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);