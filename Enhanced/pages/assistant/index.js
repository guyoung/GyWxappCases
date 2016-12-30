//index.js
var Chance = require('../../lib/chance/chance');
var Mock = require('../../lib/mockjs/mock')


//获取应用实例
var app = getApp();

Page({



    onReady: function () {
        // console.log('onLoad');
        var that = this;

        var chance = new Chance();
        console.log(chance.string());
        console.log(chance.integer());
        console.log(chance.bool());
        console.log(chance.phone());
        console.log(chance.zip());
        console.log(chance.guid());

        var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }]
        })
        // 输出结果
        console.log(JSON.stringify(data, null, 4))
    }
});