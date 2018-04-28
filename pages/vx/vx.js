// pages/vx/vx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list_post:null,
  },
  listClick: function(e){
    // console.log(e);
    console.log("id="+e.currentTarget.id);
    // console.log(e.currentTarget.dataset.name);//不能用this
    wx.navigateTo({
      url: '../post/post?id=' + e.currentTarget.id + '&data-name=' + e.currentTarget.dataset.name,
    
    })
  },
  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.clearStorage();
    wx.setStorage({
      key: "name",
      data: "Pitt Lun"
      });
    


    let thisPage=this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/hot.json',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        // console.log(res);
        thisPage.setData({
          list_post: res.data,
        })
      },
      fail: function(res) {},
      complete: function(res) {},
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
    console.log('onLoad')
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})