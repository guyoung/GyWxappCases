//index.js
var Immutable = require('../../lib/immutable/immutable');



//获取应用实例
var app = getApp();

Page({



    onReady: function () {
        // console.log('onLoad');
        var that = this;
        
        var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
        var map2 = map1.set('b', 50);
        console.log(map1.get('b')); // 2
        console.log(map2.get('b')); // 50


    }
});