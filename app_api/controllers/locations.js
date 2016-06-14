var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var theEarth = (() => {
    var earthRadius = 6371; //km, miles is 3959

    var getDistanceFromRads = (rads) => {
        return parseFloat(rads * earthRadius);
    };

    var getRadsFromDistance = (distance) => {
        return parseFloat(distance / earthRadius);
    };

    return {
        getDistanceFromRads: getDistanceFromRads,
        getRadsFromDistance: getRadsFromDistance
    }
})();

var sendJsonResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

module.exports.locationsListByDistance = (req, res) => {
    var lng = parseFloat(req.query.lng);
    var lat = parseFloat(req.query.lat);
    var maxDistance = req.query.maxDistance;

    console.log("Lng", lng + " and Lat", lat);

    var point = {
        type: "Point",
        coordinates: [lng, lat]
    };

    console.log("Point is", point);

    var geoOptions = {
        spherical: true,
        maxDistance: theEarth.getRadsFromDistance(maxDistance),
        num: 10
    };

    console.log("geoOptions is", geoOptions);

    if (!lat || !lng || !maxDistance) {
        sendJsonResponse(res, 404, {
            "message": "lng and lat and maxDistance query parameters are required"
        });
        return;
    }
    Loc.geoNear(point, geoOptions, function (err, results, stats) {
        var locations = [];
        if (err) {
            sendJsonResponse(res, 404, err);
        } else {
            results.forEach(function (doc) {

                console.log("doc", doc);

                locations.push({
                    distance: theEarth.getDistanceFromRads(doc.dis),
                    name: doc.obj.name,
                    address: doc.obj.address,
                    rating: doc.obj.rating,
                    facilities: doc.obj.facilities,
                    _id: doc.obj._id
                });
            });
            sendJsonResponse(res, 200, locations);
        }
    });
};

module.exports.locationsCreate = (req, res) => {
    Loc.create({
        name: req.body.name,
        address: req.body.address,
        facilities: req.body.facilities.split(","),
        coords: [parseFloat(req.body.lng), parseFloat(req.body.lat)],
        openingTimes: [{
            days: req.body.days1,
            opening: req.body.opening1,
            closing: req.body.closing1,
            closed: req.body.closed1
        }, {
                days: req.body.days2,
                opening: req.body.opening2,
                closing: req.body.closing2,
                closed: req.body.closed2
            }]
    }, function (err, location) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, location);
        }
    });
};

module.exports.locationsReadOne = (req, res) => {
    if (req.params && req.params.locationid) {
        Loc
            .findById(req.params.locationid)
            .exec((err, location) => {
                if (!location) {
                    sendJsonResponse(res, 404, {
                        "message": "locationid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, location);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No locationid in request"
        });
    }
};

module.exports.locationsUpdateOne = (req, res) => {
    if (!req.params.locationid) {
        sendJsonResponse(res, 404, {
            "message" : "Not found, locationid is required"
        });
        return;
    }
    Loc
        .findById(req.params.locationid)
        .select('-reviews -rating')
        .exec((err, location) => {
            if (!location) {
                sendJsonResponse(res, 404, {
                    "message" : "locationid not found"
                });
                return;
            } else if (err) {
                sendJsonResponse(res, 400, err);
                return;
            }
            location.name = req.body.name;
            location.address = req.body.address;
            location.facilities = req.body.facilities.split(",");
            location.coords = [parseFloat(req.body.lng), parseFloat(req.body.lat)];
            location.openingTimes = [{
                days: req.body.days1,
                opening: req.body.opening1,
                closing: req.body.closing1,
                closed: req.body.closed1
            }, {
                days: req.body.days2,
                opening: req.body.opening2,
                closing: req.body.closing2,
                closed: req.body.closed2
            }];
            location.save((err, location) => {
               if (err) {
                   sendJsonResponse(res, 404, err);
               } else {
                   sendJsonResponse(res, 200, location);
               }
            });
        });
};

module.exports.locationsDeleteOne = (req, res) => {
    sendJsonResponse(res, 200, { 'status': 'success' });
};