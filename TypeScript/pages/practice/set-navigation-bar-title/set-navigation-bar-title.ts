Page({
  setNaivgationBarTitle: function (e: any) {
    var title = e.detail.value.title
    console.log(title)
    wx.setNavigationBarTitle({
      title: title
    })
  }
})
