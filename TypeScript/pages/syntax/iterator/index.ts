
var app = getApp();

Page({

    onReady: function () {
        // console.log('onReady');

        // for..of
        let someArray = [1, "string", false];

        for (let entry of someArray) {
            console.log(entry); // 输出：1 string false
        }

        let list = [4, 5, 6];

        for (let i in list) {
            console.log(i); // 输出：0, 1, 2
        }

        for (let i of list) {
            console.log(i); // 输出：4, 5,6
        }

        
    }
});