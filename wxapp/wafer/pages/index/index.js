//index.js
//获取应用实例
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    addShow: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    focus: false,
    addText: '',
    lists: [],
  },
  getUserInfo: function (e) {
    console.log(e)
    this.setData({
      hasUserInfo: true,
      userInfo: e.detail.userInfo
    })

    wx.setStorage({
      key: 'user-info',
      data: e.detail.userInfo,
      success: (res) =>{
        console.log("保存成功")
      }
    })
  },

  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    }
    //事件处理函数

    // 登录
    // App globaData: userInfo
    // App onLoad
    // wx.getStrorage()
    // index onLoad global userInfo
  },
  addTodoHide(e) {
    this.setData({
      addShow: false,
      focus: false,
      addText: ''
    })
  },
  addTodo(e) {
    if (!this.data.addText.trim()) {
      return;
    }
    var addT = {
      title: this.data.addText,
      status: '0',
      id: new Date().getTime()
    }
    // console.log(addT);
    // var temp = this.data.lists;
    // temp.push(addT);
    const temp = [
      addT,
      ...this.data.lists
    ]
    this.setData({
      lists: temp
    })
    wx.setStorage({
      key: 'lists',
      data: temp
    });
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 1000
    })
    this.addTodoHide();
    // item 都是一个对象 文字只是一部分
    //value
    //list
    //setStorage
  },
  setInput(e) {
    this.setData({
      'addText': e.detail.value
    })
  }
})