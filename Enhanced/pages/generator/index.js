//index.js
var Promise = require('../../lib/es6-promise/es6-promise').Promise;
var co = require('../../lib/co/index');
var regeneratorRuntime = require("../../lib/regenerator-runtime/runtime");

//获取应用实例
var app = getApp();

Page({


    onReady: function () {
        //console.log('onLoad');
        var that = this;

        function co(gen) {
            var it = gen();
            var ret = it.next();
            ret.value.then(function (res) {
                it.next(res);
            });
        }
        function sayhello() {
            return Promise.resolve('hello').then(function (hello) {
                console.log(hello);
            });
        }
        co(function* helloworld() {
            yield sayhello();
            console.log('world');
        });
    }
});