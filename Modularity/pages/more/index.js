//index.js

//var uuid = require('../../libs/node-uuid/uuid.modified.js');
//var Base64 = require('../../libs/js-base64/base64.modified.js');
//var Chance = require('../../libs/chance/chance.modified.js');

var uuid = require('../../libs/node-uuid/uuid.modified');
var Base64 = require('../../libs/js-base64/base64.modified');
var Chance = require('../../libs/chance/chance');

//获取应用实例
var app = getApp();

Page({

    onLoad: function() {
        //console.log('onLoad');
        var that = this;


        // UUID
        // v1 是基于时间戳生成uuid
        console.log(uuid.v1());
        // v4 是随机生成uuid
        console.log(uuid.v4());
        console.log('');


        // Base64
        console.log(Base64.encode('Wechat'));
        console.log(Base64.encode('微信'));
        console.log(Base64.decode('V2VjaGF0'));
        console.log(Base64.decode('5b6u5L+h'));
        console.log('');

        // Chance
        var chance = new Chance();
        console.log(chance.string());
        console.log(chance.integer());
        console.log(chance.bool());
        console.log(chance.phone());
        console.log(chance.zip());
        console.log(chance.guid());

    }
})