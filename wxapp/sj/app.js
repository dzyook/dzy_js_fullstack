//app.js
// 应用启动  onLaunch
// App -> Page
// 全局的，应用级别的一些行为，
// 添加全局的数据
import db from './assets/db.js';
App({
  onLaunch: function () {
    Object.assign(this.globalData,db);
    // ajax请求的
    // wx.request({
      // url:'https://resources.ninghao.net/wxapp-case/db.json',
  //     success:(response) => {
  //       // console.log(response);
  //       Object.assign(this.globalData,response.data)
  //       console.log(this.globalData);
  //     },
  //     fail:(error) => {
  //       console.log(error);
  //     }
    // })
  },
  globalData: {
  }
})