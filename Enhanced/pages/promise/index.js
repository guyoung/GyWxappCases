//index.js
var Promise = require('../../lib/es6-promise/es6-promise').Promise;

//获取应用实例
var app = getApp();

Page({

   
    onReady: function () {
        //console.log('onReady');
        var that = this;

        function helloWorld(ready) {
            return new Promise(function (resolve, reject) {
                if (ready) {
                    resolve("Hello World!");
                } else {
                    reject("Good bye!");
                }
            });
        }

        helloWorld(true).then(function (message) {
            console.log(message);
        }, function (error) {
            console.log("Error:", error);
        }); // 输出:  Hello World!

        helloWorld(false).then(function (message) {
            console.log(message);
        }, function (error) {
            console.log("Error:", error);
        }); // 输出: Error: Good bye!

        // Promise.all
        var p1 = new Promise(function (resolve) {
            setTimeout(function () {
                resolve("Hello");
            }, 3000);
        });

        var p2 = new Promise(function (resolve) {
            setTimeout(function () {
                resolve("World");
            }, 1000);
        });

        Promise.all([p1, p2]).then(function (result) {
            console.log(result); // 输出: ["Hello", "World"]
        });
    }
});