var app = getApp();
Page({
    onReady: function () {
        var someArray = [1, "string", false];
        for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
            var entry = someArray_1[_i];
            console.log(entry);
        }
        var list = [4, 5, 6];
        for (var i in list) {
            console.log(i);
        }
        for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
            var i = list_1[_a];
            console.log(i);
        }
    }
});
