//index.js

var _ = require('../../libs/underscore/underscore.modified.js');

//获取应用实例
var app = getApp();


Page({

    onLoad: function() {
        //console.log('onLoad');
        var that = this;

        var lines = [];

        lines.push("_.map([1, 2, 3], function(num){ return num * 3; });");
        lines.push(_.map([1, 2, 3], function(num) { return num * 3; }));

        lines.push("var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);");
        lines.push(_.reduce([1, 2, 3], function(memo, num) { return memo + num; }, 0));

        lines.push("var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });");
        lines.push(_.find([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; }));

        lines.push("_.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });");
        lines.push(_.sortBy([1, 2, 3, 4, 5, 6], function(num) { return Math.sin(num); }));

        lines.push("_.indexOf([1, 2, 3], 2);");
        lines.push(_.indexOf([1, 2, 3], 2));

        this.setData({
            text: lines.join('\n')
        })
    }
})