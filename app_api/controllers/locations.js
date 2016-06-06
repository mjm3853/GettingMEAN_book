var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

module.exports.locationsListByDistance = (req, res) => {
    sendJsonResponse(res, 200, { 'status': 'success' });
};

module.exports.locationsCreate = (req, res) => {
    sendJsonResponse(res, 200, { 'status': 'success' });
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
    sendJsonResponse(res, 200, { 'status': 'success' });
};

module.exports.locationsDeleteOne = (req, res) => {
    sendJsonResponse(res, 200, { 'status': 'success' });
};