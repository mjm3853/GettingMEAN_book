angular.module('loc8rApp', []);

var _isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

var formatDistance = function () {
    return function (distance) {
        var numDistance, unit;
        if (distance && _isNumeric(distance)) {
            if (distance > 1) {
                numDistance = parseFloat(distance).toFixed(1);
                unit = 'km';
            } else {
                numDistance = parseInt(distance * 1000, 10);
                unit = 'm';
            }
            return numDistance + unit;
        } else {
            return "?";
        }
    };
};

var ratingStars = function () {
    return {
        scope: {
            thisRating: '=rating'
        },
        templateUrl: '/angular/rating-stars.html'
    }
}

var loc8rData = function ($http) {
    return $http.get('/api/locations?lng=72.9690884&lat=20.45504&maxDistance=2000')
};

var locationListCtrl = function ($scope, loc8rData) {
    $scope.message = "Searching for nearby places";
    loc8rData
        .success(function (data) {
            $scope.message = data.length > 0 ? "" : "No locations found";
            $scope.data = { locations: data };
        })
        .error(function (e) {
            console.log(e);
            $scope.message = "Sorry, something has gone wrong"
        });
};

angular
    .module('loc8rApp')
    .controller('locationListCtrl', locationListCtrl)
    .filter('formatDistance', formatDistance)
    .directive('ratingStars', ratingStars)
    .service('loc8rData', loc8rData);