var request = require('request');
var apiOptions = {
    server: "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = "https://frozen-shelf-12883.herokuapp.com";
}

var renderHomepage = (req, res) => {
    res.render('locations-list', {
        title: 'Loc8r | Home',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with WiFi near you!'
        },
        locations: [{
            name: 'Starcups',
            address: '125 High Street, ME 41234',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium WiFi'],
            distance: '100m',
        }, {
                name: 'Murphy\'s Pub',
                address: 'Somewhere on Elm Street',
                rating: 4,
                facilities: ['Cold drinks', 'Good WiFi'],
                distance: '127m',
            }, {
                name: 'The Garrison Tavern',
                address: 'Birmingham, England',
                rating: 5,
                facilities: ['Cold drinks', 'Danger', 'Premium WiFi'],
                distance: '1250m',
            }]
    });
}

module.exports.homelist = (req, res) => {
    renderHomepage(req, res);
}

module.exports.locationInfo = function (req, res) {
    res.render('location-info', {
        title: 'Starcups',
        pageHeader: {
            title: 'Starcups'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                }, {
                    days: 'Sunday',
                    closed: true
                }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '16 June 2013',
                    reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
                }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function (req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};