//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({
  time: null,
  timer: 0,
  data: {
    motto: 'Hello World',
    userInfo: {},
    timer: 0
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  //事件处理函数
  bindViewTap: function() {
    if (this.time === null) {
      var that = this
      this.time = setInterval(function() {
        that.timer += 10
        that.setData({
          timer: util.formatCount(that.timer)
        })
      }, 10)
    } else {
      clearInterval(this.time)
      this.time = null
    }
  },
  bindMove: function(e) {
    console.log(e)
  },
  onLoad: function () {
    const ctx = wx.createCanvasContext('myCanvas')

// Create circular gradient
const grd = ctx.createCircularGradient(75, 50, 50)
grd.addColorStop(0, 'white')
grd.addColorStop(0.49, 'rgb(255, 206, 103)')
grd.addColorStop(0.50, 'rgb(144, 80, 29)')
    //grd.addColorStop(0.70, 'rgb(200, 200, 200)')
    grd.addColorStop(1, 'white')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(0, 0, 150, 180)
ctx.draw()
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
