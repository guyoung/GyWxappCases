"use strict";
var example_1 = require("./example");
Page({
    onLoad: function () {
        this.context = wx.createContext();
        var methods = Object.keys(example_1.example.prototype);
        this.setData({
            methods: methods
        });
        var that = this;
        methods.forEach(function (method) {
            that[method] = function () {
                var _prototype = example_1.example.prototype;
                _prototype[method](that.context);
                var actions = that.context.getActions();
                wx.drawCanvas({
                    canvasId: 'canvas',
                    actions: actions
                });
            };
        });
    },
    toTempFilePath: function () {
        wx.toTempFilePath({
            canvasId: 'canvas',
            success: function (res) {
                console.log(res);
            },
            fail: function (res) {
                console.log(res);
            }
        });
    }
});
