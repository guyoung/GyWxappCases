var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app = getApp();
Page({
    onReady: function () {
        function identity(arg) {
            return arg;
        }
        var output1 = identity("myString");
        var output2 = identity("myString");
        function loggingIdentity(arg) {
            return arg;
        }
        function identity2(arg) {
            return arg;
        }
        var myIdentity2 = identity2;
        function identity3(arg) {
            return arg;
        }
        var myIdentity3 = identity3;
        function identity4(arg) {
            return arg;
        }
        var myIdentity = identity4;
        var GenericNumeric = (function () {
            function GenericNumeric() {
            }
            return GenericNumeric;
        }());
        var numberNumeric = new GenericNumeric();
        numberNumeric.zeroValue = 0;
        numberNumeric.add = function (x, y) { return x + y; };
        console.log(numberNumeric.add(numberNumeric.zeroValue, 100));
        var stringNumeric = new GenericNumeric();
        stringNumeric.zeroValue = "";
        stringNumeric.add = function (x, y) { return x + y; };
        console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
        function logIdentity(arg) {
            console.log(arg.length);
            return arg;
        }
        logIdentity({ length: 10, value: 3 });
        function copyFields(target, source) {
            for (var id in source) {
                target[id] = source[id];
            }
            return target;
        }
        var x = { a: 1, b: 2, c: 3, d: 4 };
        copyFields(x, { b: 10, d: 20 });
        var BeeKeeper = (function () {
            function BeeKeeper() {
            }
            return BeeKeeper;
        }());
        var ZooKeeper = (function () {
            function ZooKeeper() {
            }
            return ZooKeeper;
        }());
        var Animal = (function () {
            function Animal() {
            }
            return Animal;
        }());
        var Bee = (function (_super) {
            __extends(Bee, _super);
            function Bee() {
                return _super.apply(this, arguments) || this;
            }
            return Bee;
        }(Animal));
        var Lion = (function (_super) {
            __extends(Lion, _super);
            function Lion() {
                return _super.apply(this, arguments) || this;
            }
            return Lion;
        }(Animal));
        function findKeeper(a) {
            return a.prototype.keeper;
        }
        findKeeper(Lion).nametag;
    }
});
