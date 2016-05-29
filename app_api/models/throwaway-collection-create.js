db.locations.save({
    name: 'The Garrison Tavern',
    address: 'Birmingham, England',
    rating: 3,
    facilities: ['Cold drinks', 'Danger', 'Good WiFi'],
    coords: [72.9690884, 20.455041],
    openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '7:00pm',
        closed: false,
    }, {
            days: 'Saturday',
            opening: '11:00am',
            closing: '1:00am',
            closed: false
        }, {
            days: 'Sunday',
            closed: true
        }]
})

db.locations.update({
    name: 'The Garrison Tavern'
}, {
        $push: {
            reviews: {
                author: 'Winston Churchill',
                id: ObjectId(),
                rating: 5,
                timestamp: new Date("Sep 15, 1919"),
                reviewText: "What a den of sin. Derpy Derp derp."
            }
        }
    })