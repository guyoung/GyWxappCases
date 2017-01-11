import { formatLocation } from './format-location.js'

Page({
  data: {
    hasLocation: false,
  },
  getLocation: function () {
    var that = this
    wx.getLocation({
      success: function (res: any) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        })
      }
    })
  },
  clear: function () {
    this.setData({
      hasLocation: false
    })
  }
})
