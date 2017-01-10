//index.js
var Promise = require('../../lib/es6-promise/es6-promise').Promise;
var co = require('../../lib/co/we-index');
var regeneratorRuntime = require("../../lib/regenerator-runtime/runtime");

//获取应用实例
var app = getApp();

Page({


    onReady: function () {
        //console.log('onReady');
        var that = this;

        var gen = function* () {
            var a = Promise.resolve(1);
            var b = Promise.resolve(2);
            var c = Promise.resolve(3);
            var res = yield [a, b, c];
            console.log(res); // 输出：[1, 2, 3]
        };

        co(gen).then(function () {
            console.log('Generator函数执行完毕了'); // 输出：Generator函数执行完毕了
        });       
    }
});