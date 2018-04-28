// pages/chat/chat.js
var pagenum = 2;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgTotal:null,
    imgData:null,
    imgUrl:null,
    imgId:null
    
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let thisPage=this;
    wx.request({
      url: 'http://api.lililili.info/api/offline/today/babes/1',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        // console.log(res);
        thisPage.setData({
          imgData: res.data.data,
        });
        // console.log(imgData);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  
  onReachBottom: function () {
    console.log("触发上滑");
    let thisPage = this;
    
    
      wx.request({
        url: 'http://api.lililili.info/api/offline/today/babes/' + pagenum,
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          console.log('imgData=' + thisPage.data.imgData);
          console.log('res.data.data=' + res.data.data);
          let all=thisPage.data.imgData.concat(res.data.data);
          console.log(all);
          thisPage.setData({
            
            imgData: all,
          });
          console.log(pagenum)
          pagenum++;
          console.log(pagenum)
        },
      })
    
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})