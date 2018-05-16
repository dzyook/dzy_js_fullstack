//index.js
//获取应用实例
import testDrive from '../../modules/test-drive'
// console.log(testDrive)
// 在Page里得到app
const app = getApp()

Page({
  data: {
    slides:[]
  },
  onLoad(){
    this.setData({
      slides:app.globalData.slides //内置api 获取数据
    })
  },
  testDrive,
  readMore(e){
    const id =e.target.dataset.id;
    wx.navigateTo({
      url:`/pages/vehicies/show?id=${id}`,
      
      
    })
  }
})
