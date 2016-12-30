//index.js
var lodash = require('../../lib/lodash/we-lodash');
var underscore = require('../../lib/underscore/we-underscore');


//获取应用实例
var app = getApp();

Page({



    onReady: function () {
        //console.log('onLoad');
        var that = this;

        console.log(lodash.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));

        console.log(underscore.map([1, 2, 3], function(num){ return num * 3; }));

    }
});