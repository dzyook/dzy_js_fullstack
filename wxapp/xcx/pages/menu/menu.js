// pages/menu/menu.js
const MENU_WIDTH_SCALE = 0.82;
const FAST_SPEED_SECOND = 300;
const FAST_SPEED_DISTANCE = 5;
const FAST_SPEED_EFF_Y = 50;
Page({
  data: {
    ui: {
      menuWidth: 0,
      windowWidth: 0,
      offsetLeft: 0,
      tStart: true,
    }
  },
  onLoad: function (options) {
    try {
      // sync同步的意思 代表一定会阻塞
      let res = wx.getSystemInfoSync();
      this.windowWidth = res.windowWidth;
      this.data.ui.menuWidth = this.windowWidth * MENU_WIDTH_SCALE;
      this.data.ui.windowWidth = this.windowWidth;
      this.data.ui.offsetLeft = 0;
      // console.log(this.data.ui);
      this.setData({
        ui: this.data.ui,
      })
    }catch (e) {

    }
  },
  handlerAvatarTap(e) {
    let { ui } = this.data;
    // 抽屉式菜单没出来的时候
    if(ui.offsetLeft == 0) {
      ui.offsetLeft = ui.menuWidth;
      this.setData({
        ui: ui
      })
    }
  },
  handlerStart(e) {
    // 开始点
    let {clientX,clientY} = e.touches[0];
    this.tapStartX = clientX;
    this.tapStartY = clientY;
    this.tapStartTime = e.timeStamp;
    this.startX = clientX;
    this.data.ui.tStart =true;
    this.setData({
      ui:this.data.ui
    })
  },
  handlerMove(e) {
    let {clientX} = e.touches[0];
    let {ui} = this.data;
    let offsetX = this.startX - clientX;
    this.startX = clientX;
    ui.offsetLeft -= offsetX;
    if(ui.offsetLeft <= 0) {
      ui.offsetLeft = 0;
    } else if(ui.offsetLeft >= ui.menuWidth) { 
      ui.offsetLeft = ui.menuWidth;
    }
  },
  handlerCancel(e) {

  },
  handlerEnd(e) {
    // 结束点
    this.data.ui.tStart = false;
    this.setData({ui: this.data.ui})
    let {ui} = this.data;
    let {clientX, clientY} = e.changedTouches[0];
    let endTime = e.timeStamp;
    //快速滑动
    if(endTime - this.tapStartTime <= FAST_SPEED_SECOND) {
      //向左
      if(this.tapStartX - clientX > FAST_SPEED_DISTANCE) {
        ui.offsetLeft = 0;
      } else if(this.tapStartX - clientX < -FAST_SPEED_DISTANCE && Math.abs(this.tapStartY - clientY) < FAST_SPEED_EFF_Y) {
        ui.offsetLeft = ui.menuWidth;
      } else {
        if(ui.offsetLeft >= ui.menuWidth/2){
          ui.offsetLeft = ui.menuWidth;
        } else {
          ui.offsetLeft = 0;
        }
      }
    } else {
      if(ui.offsetLeft >= ui.menuWidth/2){
        ui.offsetLeft = ui.menuWidth;
      } else {
        ui.offsetLeft = 0;
      }
    }
    this.setData({ui: ui})
  }
})
