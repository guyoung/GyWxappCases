//index.js
var moment = require('../../lib/moment/we-moment-with-locales');



//获取应用实例
var app = getApp();

Page({



    onReady: function () {
        //console.log('onLoad');
        var that = this;

        // Format Dates
        console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // 输出：January 3rd 2017, 2:16:38 pm
        console.log(moment().format('dddd')); // 输出：Tuesday
        console.log(moment().format("MMM Do YY")); // 输出：Jan 3rd 17
        console.log(moment().format('YYYY [escaped] YYYY')); // 输出：2017 escaped 2017
        console.log(moment().format()); // 输出：2017-01-03T14:20:03+08:00
        console.log();

        // Relative Time
        console.log(moment("20111031", "YYYYMMDD").fromNow()); // 输出：5 years ago
        console.log(moment("20120620", "YYYYMMDD").fromNow()); // 输出：5 years ago
        console.log(moment().startOf('day').fromNow()); // 输出：14 hours ago
        console.log(moment().endOf('day').fromNow()); // 输出：in 10 hours
        console.log(moment().startOf('hour').fromNow()); // 输出：22 minutes ago
        console.log();

        // Calendar Time
        console.log(moment().subtract(10, 'days').calendar()); // 输出：12/24/2016
        console.log(moment().subtract(6, 'days').calendar()); // 输出：Last Wednesday at 2:24 PM
        console.log(moment().subtract(3, 'days').calendar()); // 输出：Last Saturday at 2:24 PM
        console.log(moment().subtract(1, 'days').calendar()); // 输出：Yesterday at 2:24 PM
        console.log(moment().calendar()); // 输出：Today at 2:24 PM
        console.log(moment().add(1, 'days').calendar()); // 输出：Tomorrow at 2:24 PM
        console.log(moment().add(3, 'days').calendar()); // 输出：Friday at 2:24 PM
        console.log(moment().add(10, 'days').calendar()); // 输出：01/13/2017
        console.log();

        // Multiple Locale Support
        console.log(moment.locale()); // 输出：en
        var m = moment().locale('zh-cn');      
        console.log(m.format('LT')); // 输出：下午2点33分
        console.log(m.format('LTS')); // 输出：下午2点33分52秒
        console.log(m.format('L')); // 输出：2017-01-03
        console.log(m.format('l')); // 输出：2017-01-03
        console.log(m.format('LL')); // 输出：2017年1月3日
        console.log(m.format('ll')); // 输出：2017年1月3日
        console.log(m.format('LLL')); // 输出：2017年1月3日下午2点33分
        console.log(m.format('lll')); // 输出：2017年1月3日下午2点33分
        console.log(m.format('LLLL')); // 输出：2017年1月3日星期二下午2点33分
        console.log(m.format('llll')); // 输出：2017年1月3日星期二下午2点33分
    }
});