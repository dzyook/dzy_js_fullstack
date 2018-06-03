//index.js
//获取应用实例
import {
  API_BASE
} from '../../config/api'
const app = getApp()

Page({
  data: {
    showLeft: false,
    showRight: false,
    canshow: true,
    move: true,
    hide:false,
    current:1,
    currentPage: 1,
    totalPages: 1,
    total: 0,
    light: 2,
    index: 1,
    agenda: {
    },
    date: [],
    result: [{
      id: 'd22',
      leftteam: "../../images/indextop/4.png",
      leftgrade: 102,
      leftname: '马刺',
      rightteam: "../../images/indextop/5.png",
      rightgrade: 111,
      rightname: '骑士',
    },
    {
      id: 'd23',
      leftteam: "../../images/indextop/10.png",
      leftgrade: 95,
      leftname: '火箭',
      rightteam: "../../images/indextop/9.png",
      rightgrade: 92,
      rightname: '勇士',
    },
    {
      id: 'd24',
      leftteam: "../../images/indextop/5.png",
      leftgrade: 83,
      leftname: '骑士',
      rightteam: "../../images/indextop/4.png",
      rightgrade: 96,
      rightname: '马刺',
    },
    {
      id: 'd25',
      leftteam: "../../images/indextop/9.png",
      leftgrade: 94,
      leftname: '勇士',
      rightteam: "../../images/indextop/10.png",
      rightgrade: 98,
      rightname: '火箭',
    }],
    news: [],
  },
  onPullDownRefresh() {
    // console.log('下拉了');
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
      url: API_BASE,
      success: (res) => {
        this.setData({
          news: res.data.data.new,
          currentPage: 1,
          hide:false
        })
        wx.hideLoading();
        wx.stopPullDownRefresh()
      }
    })
  },
  onLoad: function () {
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
      url: API_BASE,
      success: (res) => {
        this.setData({
          date: res.data.data.date,
          news: res.data.data.new,
          currentPage: 1,
          totalPages: res.data.data.totalPages,
          total: res.data.data.total
        })
      }
    }, )
    this.init();
    wx.hideLoading();
  },
  init: function () {
    let leftgrade = this.data.result[this.data.index].leftgrade;
    let rightgrade = this.data.result[this.data.index].rightgrade;
    let grade = leftgrade > rightgrade ? '1' : '2';
    this.setData({
      agenda: this.data.result[this.data.index],
      index: this.data.index,
      light: grade,
    })
  },
  onReachBottom() {
    let { currentPage, totalPages } = this.data
    if (currentPage >= totalPages) {
      this.setData({
        hide:true,
      })
      return;
    }
    wx.showLoading({
      title: '玩命加载中',
    })
    currentPage += 1;
    this.setData({
      isLoading: true
    })
    wx.request({
      url: API_BASE,
      success: (res) => {
        const news = [
          ...this.data.news,
          ...res.data.data.new,
        ];
        this.setData({
          news,
          currentPage
        })
        wx.hideLoading();
      }
    })
  },
  turnleft: function (e) {
    const index = this.data.index - 1;
    let that = this;
    setTimeout(function () {
      if (index <= -1) {
        return;
      } else if (index == 0) {
        that.setData({
          showLeft: true,
          agenda: that.data.result[index],
          light: that.data.result[index].leftgrade > that.data.result[index].rightgrade ? '1' : '2',
          index: index,
          current:index,
        })
      } else {
        that.setData({
          agenda: that.data.result[index],
          index: index,
          current:index,
          light: that.data.result[index].leftgrade > that.data.result[index].rightgrade ? '1' : '2',
          showLeft: false,
          showRight: false,
        })
      }
    }, 100)
  },
  turnright: function (e) {
    const index = this.data.index + 1;
    let that = this;
    setTimeout(function () {
      if (index >= 4) {
        return;
      } else if (index == 3) {
        that.setData({
          agenda: that.data.result[index],
          index: index,
          current:index,
          light: that.data.result[index].leftgrade > that.data.result[index].rightgrade ? '1' : '2',
          showRight: true,
        })
      }
      else {
        that.setData({
          agenda: that.data.result[index],
          current:index,
          index: index,
          showRight: false,
          showLeft: false,
          light: that.data.result[index].leftgrade > that.data.result[index].rightgrade ? '1' : '2',
        })
      }
    }, 100)
  },
  swiperchange:function(e) {
    const current = e.detail.current;
    const ind = this.data.index+1;
    const dex = this.data.index-1;
    console.log(current);
    if(current == ind){
      this.turnright()
    }else if(dex == current){
     this.turnleft()
    }
  },
  onShareAppMessage() {
    return {
      path: `/pages/index/index`,
      success: function(res) {
      },
      fail: function(res) {
      }
    }
  },
})
