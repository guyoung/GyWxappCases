var app = getApp();
Page({
    onReady: function () {
        function add1(x, y) {
            return x + y;
        }
        var add2 = function (x, y) { return x + y; };
        var sub1 = function (a, b) { return a - b; };
        var sub2 = function (a, b) { return a - b; };
        function buildName1(firstName, lastName) {
            if (lastName)
                return firstName + " " + lastName;
            else
                return firstName;
        }
        console.log(buildName1("Bob"));
        console.log(buildName1("Bob", "Adams"));
        function buildName2(firstName, lastName) {
            if (lastName === void 0) { lastName = "Smith"; }
            return firstName + " " + lastName;
        }
        console.log(buildName2("Bob"));
        console.log(buildName2("Bob", undefined));
        console.log(buildName2("Bob", "Adams"));
        function buildName3(firstName) {
            var restOfName = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                restOfName[_i - 1] = arguments[_i];
            }
            return firstName + " " + restOfName.join(" ");
        }
        console.log(buildName3("Joseph", "Samuel", "Lucas", "MacKinzie"));
        var array = [1, 2, 3];
        array.forEach(function (v) { return console.log(v); });
        var Handler = (function () {
            function Handler() {
                var _this = this;
                this.change = function (m) { _this.message = m; };
                this.output = function () { console.log(_this.message); };
            }
            return Handler;
        }());
        var handler = new Handler();
        handler.change("Hello");
        handler.output();
        var FooClass = (function () {
            function FooClass() {
            }
            FooClass.prototype.bar = function (arg) {
                if (typeof arg === 'number')
                    return arg.toString();
                if (typeof arg === 'string')
                    return arg.length;
            };
            return FooClass;
        }());
    }
});
