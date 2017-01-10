//index.js

//获取应用实例
var app = getApp();

Page({

    onReady: function () {
        // console.log('onReady');

        var that = this;

        // Chance
        var Chance = require('../../lib/chance/chance');
        var chance = new Chance();

        console.log(chance.bool()); // 输出：false
        console.log(chance.character()); // 输出：I
        console.log(chance.floating()); // 输出：246585506136.064
        console.log(chance.integer()); // 输出：1867472378527744
        console.log(chance.natural()); // 输出：3524803082321920
        console.log(chance.string()); // 输出：7IVZVkvg2dLI@IP91C@V   

        console.log(chance.paragraph());  //

        console.log(chance.phone()); // (265) 892-6728
        console.log(chance.zip()); // 76750

        console.log(chance.guid()); // 67f55bf2-820d-5df8-98c8-a99cda4981da

        // mock.js
        {
            var Mock = require('../../lib/mockjs/mock');

            var data = Mock.mock({
                'list|1-10': [{
                    'id|+1': 1
                }]
            })
            console.log(JSON.stringify(data, null, 4));
        }

        {

            let DEBUG = true;

            var Mock = require('../../lib/mockjs/mock');

            if (DEBUG) {
                var data = Mock.mock({
                    'list|1-10': [{
                        'id|+1': 1
                    }]
                });

                console.log(JSON.stringify(data, null, 4))
            } else {
                wx.request({
                    url: 'https://www.com.cn/data.php',
                    header: {
                        'content-type': 'application/json'
                    },
                    success: function (res) {
                        console.log(JSON.stringify(res.data));
                    }
                });
            }
        }
    }
});