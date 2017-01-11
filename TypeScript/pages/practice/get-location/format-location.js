"use strict";
function formatLocation(longitude, latitude) {
    longitude = longitude.toFixed(2);
    latitude = latitude.toFixed(2);
    return {
        longitude: longitude.toString().split('.'),
        latitude: latitude.toString().split('.')
    };
}
exports.formatLocation = formatLocation;
