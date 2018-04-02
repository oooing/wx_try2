// pages/node/node.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sourceLink:null,
    pageNumber:45,
    exportLinks:"",
  },
  inputLink:function(e){
    // console.log(e);
    this.setData({
      sourceLink:e.detail.value
    });
    // console.log(this.data.sourceLink);
    
  },
  inputNm:function(e){
    this.setData({
      pageNumber: e.detail.value
    });
  },
  btnMakeLinks:function(){
    let thisPage=this;
    let exportLinks="";
    let firstLink = thisPage.data.sourceLink + '.html;';
    for (let i = 2; i <= thisPage.data.pageNumber ; i++){
      exportLinks+=thisPage.data.sourceLink+'_'+i+'.html;';
      
    };
    console.log(firstLink+exportLinks);
    thisPage.setData({
      exportLinks: firstLink+exportLinks,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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