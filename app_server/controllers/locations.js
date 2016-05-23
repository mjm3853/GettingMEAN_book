module.exports.homelist = (req, res) => {
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
        },{
            name: 'Murphy&#8217;s Pub',
            address: 'Somewhere on Elm Street',
            rating: 4,
            facilities: ['Cold drinks', 'Good WiFi'],
            distance: '127m',
        },{
            name: 'The Garrison Tavern',
            address: 'Birmingham, England',
            rating: 5,
            facilities: ['Cold drinks', 'Danger', 'Premium WiFi'],
            distance: '1250m',
        }]
    });
}

module.exports.locationInfo = (req, res) => {
    res.render('location-info', { title: 'Loc8r | Location info' });
}

module.exports.addReview = (req, res) => {
    res.render('location-review-form', { title: 'Loc8r | Add review' })
}