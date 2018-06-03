// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      category: [
          { name: '果味', id: 'guowei' },
          { name: '蔬菜', id: 'shucai' },
          { name: '炒货', id: 'chaohuo' },
          { name: '点心', id: 'dianxin' },
          { name: '粗茶', id: 'cucha' },
          { name: '淡饭', id: 'danfan' }
      ],
      curIndex: 0,
      index: 0,
      detail: [],
      toView: 'danfan',
  },
  switchCategory: function(e) {
    // console.log(e.currentTarget);  
      this.setData({
          toView: e.currentTarget.dataset.id,
          curIndex: e.currentTarget.dataset.index ? e.currentTarget.dataset.index : 0,
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
      wx.request({
          url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: (res) => {
              // success
              this.setData({
                  detail: res.data,
              })
          },
          fail: function() {
              // fail
          },
          complete: function() {
              // complete
          }
      })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})