module.exports.homelist = (req, res) => {
    res.render('locations-list', { title: 'Loc8r | Home' });
}

module.exports.locationInfo = (req, res) => {
    res.render('location-info', { title: 'Loc8r | Location info' });
}

module.exports.addReview = (req, res) => {
    res.render('location-review-form', { title: 'Loc8r | Add review' })
}