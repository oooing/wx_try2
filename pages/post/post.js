// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post:null,
    comment:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let thisPage=this
    console.log(options);
    console.log('id='+options.id);
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id=' + options.id,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        // console.log(res);
        thisPage.setData({
          post:res.data[0]
        });
        // console.log(thisPage.data.post)
      },
      fail: function(res) {},
      complete: function(res) {},
    });
    wx.request({
      url: 'https://www.v2ex.com/api/replies/show.json',
      data: {
        topic_id: options.id
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res);
        thisPage.setData({
          comment: res.data,
        });
        console.log(thisPage.data.comment)
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
