// 

function f07_enhanced_regular_expression() {
    console.log("\nf07:Enhanced Regular Expression");

    // u修饰符
    console.log(/^\uD83D/u.test('\uD83D\uDC2A')); // 输出: false
    console.log(/^\uD83D/.test('\uD83D\uDC2A')); // 输出: true

    // y修饰符
    var s = 'aaa_aa_a';
    var r1 = /a+/g;
    var r2 = /a+/y;

    // 第一次匹配都成功
    console.log(r1.exec(s)[0]); // 输出: aaa
    console.log(r2.exec(s)[0]); // 输出: aaa

    console.log(r1.exec(s)[0]); // 输出: aa
    // 剩余部分第一个位置是下划线，不匹配
    console.log(r2.exec(s)); // 输出: null

    // sticky属性
    var r = /hello\d/y;
    console.log(r.sticky); // 输出: true

    // flags属性
    console.log(/abc/ig.flags); // 输出: gi

}

module.exports = f07_enhanced_regular_expression;