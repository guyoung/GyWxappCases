//index.js
var moment = require('../../lib/moment/we-moment-with-locales');



//获取应用实例
var app = getApp();

Page({



    onReady: function () {
        //console.log('onLoad');
        var that = this;

        console.log(moment.locale());
        console.log(moment.now());
        console.log(moment.months());
        console.log(moment.weekdaysShort());

        console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

        console.log('');

        var now = moment();
        console.log(now);
        console.log(now.toDate());
        console.log(now.toISOString());
        console.log(now.toJSON());
    }
});