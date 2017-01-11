Page({
  data: {
    direction: 0
  },
  onReady: function () {
    var that = this
    wx.onCompassChange(function (res: any) {
      that.setData({
        direction: parseInt(res.direction)
      })
    })
  }
})
