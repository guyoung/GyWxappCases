"use strict";
var format_location_js_1 = require("./format-location.js");
Page({
    data: {
        hasLocation: false,
    },
    getLocation: function () {
        var that = this;
        wx.getLocation({
            success: function (res) {
                console.log(res);
                that.setData({
                    hasLocation: true,
                    location: format_location_js_1.formatLocation(res.longitude, res.latitude)
                });
            }
        });
    },
    clear: function () {
        this.setData({
            hasLocation: false
        });
    }
});
