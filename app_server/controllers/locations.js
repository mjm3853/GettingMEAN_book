module.exports.homelist = (req, res) => {
    res.render('locations-list', { title: 'Home' });
}

module.exports.locationInfo = (req, res) => {
    res.render('index', { title: 'Location info' });
}

module.exports.addReview = (req, res) => {
    res.render('index', { title: 'Add review' })
}