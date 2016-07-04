var request = require('request');
var apiOptions = {
    server: "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = "https://frozen-shelf-12883.herokuapp.com";
}

//--------------------------------------------------------

var renderHomepage = (req, res, responseBody) => {
    var message;
    if (!(responseBody instanceof Array)) {
        message = "Sorry, API Lookup Error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "Sorry, no places found nearby";
        }
    }
    console.log("responseBody is: " + responseBody);
    res.render('locations-list', {
        title: 'Loc8r | Home',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with WiFi near you!'
        },
        locations: responseBody,
        message: message
    });
}

var renderDetailPage = (req, res, locDetail) => {
    console.log("Location Details:", locDetail);
    res.render('location-info', {
        title: locDetail.name,
        pageHeader: {
            title: locDetail.name
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: locDetail
    });
}

var renderReviewForm = (req, res, locDetail) => {
    res.render('location-review-form', {
        title: 'Review ' + locDetail.name + ' on Loc8r',
        pageHeader: {
            title: 'Review ' + locDetail.name
        },
        error: req.query.err
    });
}

//------------------------------------------

var _formatDistance = (distance) => {
    var numDistance, unit;
    if (distance > 1) {
        numDistance = parseFloat(distance).toFixed(1);
        unit = 'km';
    } else {
        numDistance = parseInt(distance * 1000, 10);
        unit = 'm';
    }
    return numDistance + unit;
};

var _showError = (req, res, status) => {
    var title, content;
    if (status === 404) {
        title = "404, page not found";
        content = "Oh dear. Looks like we can't find this page. Sorry.";
    } else {
        title = status + ", something has gone wrong";
        content = "Sorry, we are currently experiencing technical difficulties."
    }
    res.status(status);
    res.render('generic-text', {
        title: title,
        content: content
    });
};

//------------------------------------------

var getLocationInfo = (req, res, callback) => {
    var requestOptions, path;
    path = '/api/locations/' + req.params.locationid;
    requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };
    request(
        requestOptions,
        function (err, response, body) {
            var data = body;
            if (response.statusCode === 200) {
                data.coords = {
                    lng: body.coords[0],
                    lat: body.coords[1]
                };
                callback(req, res, data);
            } else {
                _showError(req, res, response.statusCode);
            }
        }
    );
};

//------------------------------------------

module.exports.homelist = (req, res) => {
    var requestOptions, path;
    path = '/api/locations';
    requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {},
        qs: {
            lng: 72.9690884,
            lat: 20.4550411,
            maxDistance: 1000
        }
    };
    request(
        requestOptions,
        function (err, response, body) {
            var i, data;
            data = body;
            if (response.statusCode === 200 && data.length) {
                for (i = 0; i < data.length; i++) {
                    data[i].distance = _formatDistance(data[i].distance);
                }
            }
            renderHomepage(req, res, data);
        }
    );
};

module.exports.locationInfo = function (req, res) {
    getLocationInfo(req, res, function (req, res, responseData) {
        renderDetailPage(req, res, responseData);
    });
};

/* GET 'Add review' page */
module.exports.addReview = function (req, res) {
    getLocationInfo(req, res, function (req, res, responseData) {
        renderReviewForm(req, res, responseData);
    });
};

module.exports.doAddReview = function (req, res) {
    var requestOptions, path, locationid, postdata;
    locationid = req.params.locationid;
    path = "/api/locations/" + locationid + "/reviews";
    postdata = {
        author: req.body.name,
        rating: parseInt(req.body.rating, 10),
        reviewText: req.body.review
    };
    requestOptions = {
        url: apiOptions.server + path,
        method: "POST",
        json: postdata
    };
    request(
        requestOptions,
        function (err, response, body) {
            if (response.statusCode === 201) {
                res.redirect('/location/' + locationid);
            } else if (response.statusCode === 400 && body.name && body.name === "ValidationError") {
                res.redirect('/location/' + locationid + '/reviews/new?err=val');
            } else {
                console.log(body);
                _showError(req, res, response.statusCode);
            }
        }
    )
};