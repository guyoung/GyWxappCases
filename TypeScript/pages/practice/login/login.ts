var app = getApp()
Page({
  onLoad: function () {
    this.setData({
      hasLogin: app.globalData.hasLogin
    })
  },
  data: {},
  login: function () {
    var that = this
    wx.login({
      success: function (res: any) {
        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
        that.update()
      }
    })
  }
})
