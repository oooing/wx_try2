// pages/chat/chat.js
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

  onReachBottom:function(){
    console.log('到底啦');
    // let thisPage = this;
    // for(let i=2;i<500;i++){
    //   wx.request({
    //     url: 'http://api.lililili.info/api/offline/today/babes/' + i,
    //     data: '',
    //     header: {},
    //     method: 'GET',
    //     dataType: 'json',
    //     responseType: 'text',
    //     success: function (res) {
    //       console.log(res);
    //       thisPage.setData({
    //         imgData: res.data.data,
    //       });
    //       // console.log(imgData);
    //     },
    //     fail: function (res) { },
    //     complete: function (res) { },
    //   })
    // }
    
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})