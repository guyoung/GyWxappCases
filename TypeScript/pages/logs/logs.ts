//logs.js
import * as util from "../../utils/util";

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log : any) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
