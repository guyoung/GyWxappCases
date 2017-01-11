Page({
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },
  stopPullDownRefresh: function () {
    wx.stopPullDownRefresh({
      complete: function (res: any) {
        console.log(res, new Date())
      }
    })
  }
})
