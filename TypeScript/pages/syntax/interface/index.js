var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app = getApp();
Page({
    onReady: function () {
        function printLabel(labelledObj) {
            console.log(labelledObj.label);
        }
        var myObj = { size: 10, label: "Size 10 Object" };
        printLabel(myObj);
        function createSquare(config) {
            var newSquare = { color: "white", area: 100 };
            if (config.color) {
                newSquare.color = config.color;
            }
            if (config.width) {
                newSquare.area = config.width * config.width;
            }
            return newSquare;
        }
        var mySquare = createSquare({ color: "black" });
        var p1 = { x: 10, y: 20 };
        var a = [1, 2, 3, 4];
        var ro = a;
        var squareOptions2 = { colour: "red", width: 100 };
        var mySquare2 = createSquare(squareOptions2);
        var mySearch;
        mySearch = function (src, sub) {
            var result = src.search(sub);
            if (result == -1) {
                return false;
            }
            else {
                return true;
            }
        };
        var myArray;
        myArray = ["Bob", "Fred"];
        var myStr = myArray[0];
        var Clock = (function () {
            function Clock(h, m) {
            }
            Clock.prototype.setTime = function (d) {
                this.currentTime = d;
            };
            return Clock;
        }());
        function createClock(ctor, hour, minute) {
            return new ctor(hour, minute);
        }
        var DigitalClock = (function () {
            function DigitalClock(h, m) {
            }
            DigitalClock.prototype.tick = function () {
                console.log("beep beep");
            };
            return DigitalClock;
        }());
        var AnalogClock = (function () {
            function AnalogClock(h, m) {
            }
            AnalogClock.prototype.tick = function () {
                console.log("tick tock");
            };
            return AnalogClock;
        }());
        var digital = createClock(DigitalClock, 12, 17);
        var analog = createClock(AnalogClock, 7, 32);
        var square = {};
        square.color = "blue";
        square.sideLength = 10;
        square.penWidth = 5.0;
        function getCounter() {
            var counter = function (start) { };
            counter.interval = 123;
            counter.reset = function () { };
            return counter;
        }
        var c = getCounter();
        c(10);
        c.reset();
        c.interval = 5.0;
        var Control = (function () {
            function Control() {
            }
            return Control;
        }());
        var Button = (function (_super) {
            __extends(Button, _super);
            function Button() {
                return _super.apply(this, arguments) || this;
            }
            Button.prototype.select = function () { };
            return Button;
        }(Control));
        var TextBox = (function (_super) {
            __extends(TextBox, _super);
            function TextBox() {
                return _super.apply(this, arguments) || this;
            }
            TextBox.prototype.select = function () { };
            return TextBox;
        }(Control));
        var Image = (function () {
            function Image() {
            }
            Image.prototype.select = function () { };
            return Image;
        }());
        var Location = (function () {
            function Location() {
            }
            Location.prototype.select = function () { };
            return Location;
        }());
        var Chart = (function () {
            function Chart() {
            }
            return Chart;
        }());
        var textShape = { x: 1, y: 2, text: 'hello' };
    }
});
