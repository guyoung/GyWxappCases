//index.js
var X2JS = require('../../lib/x2js/we-x2js');


//获取应用实例
var app = getApp();

Page({



    onReady: function () {
        // console.log('onLoad');
        var that = this;
        var x2js = new X2JS();
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

        var document = x2js.xml2js(xml);
        console.log(JSON.stringify(document));
        console.log(document.business.company);
        console.log(document.business.owner);
        console.log(document.business.employee[0].firstname);
        console.log(document.business.employee[0].lastname);
    }
});