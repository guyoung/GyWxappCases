//index.js

var moment = require('../../libs/moment/moment.modified.js');

//获取应用实例
var app = getApp();


Page( {

    onLoad: function() {
        //console.log('onLoad');
        var that = this;

        var lines = [];

        console.log(moment.locale());
        console.log(moment.now());
        console.log(moment.months());
        console.log(moment.weekdaysShort());
        
        var now = moment();
        console.log(now);
        console.log(now.toDate());
        console.log(now.toISOString());
        console.log(now.toJSON());      

    }
})