var app = getApp();
Page({
    onReady: function () {
        {
            var isDone = false;
            console.log(isDone);
        }
        {
            var decimal = 6;
            console.log(decimal);
            var hex = 0xf00d;
            console.log(hex);
            var binary = 10;
            console.log(binary);
            var octal = 484;
            console.log(octal);
        }
        {
            var color = "blue";
            color = 'red';
            console.log(color);
            var fullName = "Bob Bobbington";
            console.log(fullName);
            var name_1 = "John";
            var age = 37;
            var sentence = "Hello, my name is " + name_1 + ".\n            \n                I'll be " + (age + 1) + " years old next month.";
            console.log(sentence);
        }
        {
            var list = [1, 2, 3];
            console.log(list);
            var genericList = [1, 2, 3];
            console.log(genericList);
        }
        {
            var x = void 0;
            x = ["hello", 10];
            var y = ["hello", 10];
            console.log(y[0].substr(1));
            var z = ["hello", 10];
            z[3] = "world";
            console.log(z[3]);
            console.log(z[3].toString());
        }
        {
            var Color1;
            (function (Color1) {
                Color1[Color1["Red"] = 0] = "Red";
                Color1[Color1["Green"] = 1] = "Green";
                Color1[Color1["Blue"] = 2] = "Blue";
            })(Color1 || (Color1 = {}));
            ;
            var c1 = Color1.Green;
            console.log(c1);
            var Color2;
            (function (Color2) {
                Color2[Color2["Red"] = 1] = "Red";
                Color2[Color2["Green"] = 2] = "Green";
                Color2[Color2["Blue"] = 3] = "Blue";
            })(Color2 || (Color2 = {}));
            ;
            var c2 = Color2.Green;
            console.log(c2);
            var Color3;
            (function (Color3) {
                Color3[Color3["Red"] = 1] = "Red";
                Color3[Color3["Green"] = 2] = "Green";
                Color3[Color3["Blue"] = 4] = "Blue";
            })(Color3 || (Color3 = {}));
            ;
            var c3 = Color3.Green;
            console.log(c3);
            var Color4;
            (function (Color4) {
                Color4[Color4["Red"] = 1] = "Red";
                Color4[Color4["Green"] = 2] = "Green";
                Color4[Color4["Blue"] = 3] = "Blue";
            })(Color4 || (Color4 = {}));
            ;
            var colorName = Color4[2];
            console.log(colorName);
        }
        {
            var notSure = 4;
            notSure = "maybe a string instead";
            console.log(notSure);
            notSure = false;
            console.log(notSure);
            var prettySure = 4;
            var list = [1, true, "free"];
            list[1] = 100;
            console.log(list);
        }
        {
            function warnUser() {
                console.log("This is my warning message");
            }
            warnUser();
            var unusable = undefined;
            console.log(unusable);
        }
        {
            var u = undefined;
            console.log(u);
            var n = null;
            console.log(n);
            console.log(u === n);
        }
        {
            function error(message) {
                throw new Error(message);
            }
            function fail() {
                return error("Something failed");
            }
            function infiniteLoop() {
                while (true) {
                }
            }
        }
        {
            var sym1 = Symbol();
            var sym2 = Symbol("key");
            var sym3 = Symbol("key");
            var sym4 = Symbol("key");
            console.log(sym3 === sym4);
            var sym5 = Symbol();
            var obj = (_a = {},
                _a[sym5] = "value",
                _a);
            console.log(obj[sym5]);
            var sym6_1 = Symbol("foo");
            var C = (function () {
                function C() {
                }
                C.prototype[sym6_1] = function () {
                    return "C";
                };
                return C;
            }());
            var c = new C();
            var className = c[sym6_1]();
            console.log(className);
        }
        var _a;
    }
});
