var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var app = getApp();
Page({
    onReady: function () {
        {
            var a = 123;
            var a = 456;
            console.log(a);
            var b = [];
            for (var i = 0; i < 10; i++) {
                b[i] = function () {
                    console.log(i);
                };
            }
            b[5]();
            b[6]();
        }
        {
            var a_1 = 123;
            console.log(a_1);
            var b_1 = [];
            var _loop_1 = function (i_1) {
                b_1[i_1] = function () {
                    console.log(i_1);
                };
            };
            for (var i_1 = 0; i_1 < 10; i_1++) {
                _loop_1(i_1);
            }
            b_1[5]();
            b_1[6]();
        }
        {
            var YEAR = 2017;
            console.log(YEAR);
            var foo = { prop: 123 };
            foo.prop = 456;
            console.log(foo.prop);
        }
        {
            {
                var input = [1, 2];
                var first = input[0], second = input[1];
                console.log(first);
                console.log(second);
            }
            {
                var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
                console.log(first);
                console.log(rest);
            }
            {
                var o = { a: "foo", b: 12, c: "bar" };
                var a_2 = o.a, b_2 = o.b;
                console.log(a_2);
                console.log(b_2);
            }
            {
                var o = { a: "foo", b: 12, c: "bar" };
                var a_3 = o.a, passthrough = __rest(o, ["a"]);
                var total = passthrough.b + passthrough.c.length;
                console.log(total);
            }
        }
        {
            {
                var first = [1, 2];
                var second = [3, 4];
                var bothPlus = [0].concat(first, second, [5]);
                console.log(bothPlus);
            }
        }
    }
});
