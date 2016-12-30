//index.js
var uuidv1 = require('../../lib/uuid/we-uuidv1');
var uuidv4 = require('../../lib/uuid/we-uuidv4');
var Base64 = require('../../lib/js-base64/we-base64');
var CryptoJS = require('../../lib/crypto-js/crypto-js');
var sjcl = require('../../lib/sjcl/sjcl');

//获取应用实例
var app = getApp();

Page({



    onReady: function () {
        // console.log('onLoad');
        var that = this;

        console.log(uuidv1());
        console.log(uuidv4());

        console.log(Base64.encode('Wechat'));
        console.log(Base64.encode('微信'));
        console.log(Base64.decode('V2VjaGF0'));
        console.log(Base64.decode('5b6u5L+h'));

        console.log(CryptoJS.MD5('Wechat').toString()); // 98ffdc1f1a326c9f73bbe0b78e1d180e
        console.log(CryptoJS.SHA1('Wechat').toString()); // 42989457d716a8b89f99c687a41779d4102b5491
        console.log(CryptoJS.SHA256('Wechat').toString()); // 885e2deda21a6c752f05e9c3ac95c90de31bce4b25ce38c330feee389906c83f


        console.log(sjcl.codec.hex.toBits('Wechat'));
        console.log(sjcl.codec.hex.toBits('Wechat'));
        console.log(sjcl.codec.base64.toBits('Wechat'));
        var hash = sjcl.encrypt("password", "Wechat");
        console.log(hash);
        var out = sjcl.decrypt("password", hash);
        console.log(out);
    }
});