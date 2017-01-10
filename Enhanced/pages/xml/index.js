//index.js
var X2JS = require('../../lib/x2js/we-x2js');


//获取应用实例
var app = getApp();

Page({

    onReady: function () {
        // console.log('onReady');

        var that = this;

        var x2js = new X2JS();
        var document = x2js.xml2js("<foo><a>1</a></foo>");
        console.log(document.foo); // 输出：Object {a: "1"}


        var xml = x2js.js2xml({foo: {a: 1}});
        console.log(xml); // 输出：<foo><a>1</a></foo>
        

        var x2js2 = new X2JS();
        var xml = `<?xml version="1.0" encoding="UTF-8" ?>
<business>
<company>Code Blog</company>
<owner>Nic Raboy</owner>
<employee>
<firstname>Nic</firstname>
<lastname>Raboy</lastname>
</employee>
<employee>
<firstname>Maria</firstname>
<lastname>Campos</lastname>
</employee>
</business>`;

        var document = x2js2.xml2js(xml);     
        console.log(document.business.company); // 输出：Code Blog
        console.log(document.business.owner); // 输出：Nic Raboy
        console.log(document.business.employee[0].firstname); // 输出：Nic
        console.log(document.business.employee[0].lastname); // 输出：Raboy
    }
});