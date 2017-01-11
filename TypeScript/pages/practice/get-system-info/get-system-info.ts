Page({
  data: {
    systemInfo: {}
  },
  getSystemInfo: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res: any) {
        that.setData({
          systemInfo: res
        })
        that.update()
      }
    })
  }
})
