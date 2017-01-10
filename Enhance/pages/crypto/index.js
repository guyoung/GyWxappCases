//index.js





//获取应用实例
var app = getApp();

Page({



    onReady: function () {
        // console.log('onLoad');
        var that = this;

        // node-uuid
        // v1
        var uuidv1 = require('../../lib/uuid/we-uuidv1');
        console.log(uuidv1()); // 输出：70d47fd0-d250-11e6-9816-45a4888ae4f：

        // v4
        var uuidv4 = require('../../lib/uuid/we-uuidv4');
        console.log(uuidv4()); // 输出：d839476c-ce27-4d24-a431-e96123c1916b

        // 设定产生参数
        var v1 = uuidv1({
            node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
            clockseq: 0x1234,
            msecs: new Date().getTime(),
            nsecs: 5678
        });
        console.log(v1); // 输出：908e3a9e-d250-11e6-9234-0123456789ab

        console.log();

        // js-base64
        var Base64 = require('../../lib/js-base64/we-base64');
        console.log(Base64.encode('Wechat')); // 输出：V2VjaGF0
        console.log(Base64.encode('微信')); // 输出：5b6u5L+h
        console.log(Base64.decode('V2VjaGF0')); // 输出：Wechat
        console.log(Base64.decode('5b6u5L+h')); // 输出：微信

        console.log();

        // crypto-js
        var CryptoJS = require('../../lib/crypto-js/crypto-js');
        console.log(CryptoJS.MD5('Wechat').toString()); // 输出：98ffdc1f1a326c9f73bbe0b78e1d180e
        console.log(CryptoJS.SHA1('Wechat').toString()); // 输出：42989457d716a8b89f99c687a41779d4102b5491
        console.log(CryptoJS.SHA256('Wechat').toString()); // 输出： 885e2deda21a6c752f05e9c3ac95c90de31bce4b25ce38c330feee389906c83f

        // SJCL
        var sjcl = require('../../lib/sjcl/sjcl');
        var enStr = sjcl.encrypt("password", "Wechat");
        console.log(enStr);
        var deStr = sjcl.decrypt("password", enStr);
        console.log(deStr);
    }
});