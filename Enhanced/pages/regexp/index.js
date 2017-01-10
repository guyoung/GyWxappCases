//index.js
var XRegExp = require('../../lib/xregexp/xregexp');



//获取应用实例
var app = getApp();

Page({



    onReady: function () {
        // console.log('onLoad');
        var that = this;

        var date = XRegExp('(?<year>  [0-9]{4} ) -?  # year  \n\
                    (?<month> [0-9]{2} ) -?  # month \n\
                    (?<day>   [0-9]{2} )     # day   ', 'x');

        var match = XRegExp.exec('2015-02-22', date);
        console.log(match.year); // 输出：2015


        var evens = [];
        XRegExp.forEach('1a2345', /\d/, function (match, i) {
            if (i % 2) evens.push(+match[0]);
        });
        console.log(evens); // 输出：[2, 4]


        var result1 = XRegExp.matchChain('1 <b>2</b> 3 <b>4 a 56</b>', [
            XRegExp('(?is)<b>.*?</b>'),
            /\d+/
        ]);
        console.log(result1); // 输出：["2", "4", "56"]


        var html = '<a href="http://xregexp.com/">XRegExp</a>' +
            '<a href="http://www.google.com/">Google</a>';
        var result2 = XRegExp.matchChain(html, [
            { regex: /<a href="([^"]+)">/i, backref: 1 },
            { regex: XRegExp('(?i)^https?://(?<domain>[^/?#]+)'), backref: 'domain' }
        ]);
        console.log(result2); // 输出：["xregexp.com", "www.google.com"]


        var result3 = XRegExp.union(['a+b*c', /(dog)\1/, /(cat)\1/], 'i');
        console.log(result3); // 输出：/a\+b\*c|(dog)\1|(cat)\2/i


        var pos = 3;
        var result4 = [];
        while (match = XRegExp.exec('<1><2><3><4>5<6>', /<(\d+)>/, pos, 'sticky')) {
            result4.push(match[1]);
            pos = match.index + match[0].length;
        }
        console.log(result4);  // 输出：['2', '3', '4']


        var result5 = XRegExp.replace('2015-02-22', date, '${month}/${day}/${year}');
        console.log(result5);
        
        
        var result6 = XRegExp.replace('2015-02-22', date, function (match) {
            return match.month + '/' + match.day + '/' + match.year;
        });
        console.log(result6);
    }
});