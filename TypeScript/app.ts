//app.js

App({
    onLaunch: function () {
        var logs: any = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
    },
    getUserInfo: function (cb: any) {
        var that = this;

        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            wx.login({
                success: function () {
                    wx.getUserInfo({
                        success: function (res: any) {
                            that.globalData.userInfo = res.userInfo
                            typeof cb == "function" && cb(that.globalData.userInfo)
                        }
                    })
                }
            })
        }
    },
    globalData: {
        userInfo: null
    }
});