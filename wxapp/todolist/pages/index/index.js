//index.js
//获取应用实例
const app = getApp()

Page({
  // 数据 对应着 界面状态
  data: {
    // 默认的status是1 全部
    // setData 2 未完成
            // 3 已完成
    status: 1,
    show: true,
    text:'请输入任务',
    inputText:'',
    addText:null,
    lists: [],
    curLists:[],
  },
  // curLists:[],
  showStatus: function(e) {
    // 文字？ 
    const status =
      e.currentTarget.dataset.status
    // console.log(e, status);
    // 不再是dom编程,针对界面状态的编程
    if(status === '1'){
    this.setData({
      status: status,
      curLists: this.data.lists
    })
    }else{
      this.setData({
        status: status,
        curLists: this.data.lists.filter(item => +item.status === (status-2))
      })
    }
  },
  addTodoShow: function(e) {
    const show =
    e.currentTarget.dataset.show
  console.log(e, show);
  // 不再是dom编程,针对界面状态的编程
  this.setData({
    show: false
  })
  },

  addTodo:function(e){
    //如何添加新的todo?
    //页面上多一条任务 显示多少条 由lists 决定的
    // 数据驱动界面，数据变，界面自动更新
    // MVVM modle(数据模型data) View VM(视图模型层)
    //输入框内容
    const task = {
      title:this.data.inputText,
      status:'0',
      date:'刚刚'
    }
    const temp = [...this.data.lists,task];
    this.setData({
      lists: temp,
      show: true,
      inputText:'',
      text:'请输入任务',
    })

  },
  addTodoHide:function(e){
    const show =
    e.currentTarget.dataset.show
  console.log(e, show);
  // 不再是dom编程,针对界面状态的编程
  this.setData({
    show: true,
    text:'请输入任务',
    inputText:''
  })
  },
  //事件处理函数
  inputText:function(e){
    const text = e.currentTarget.dataset.text
    this.setData({
      text:''
    })
  },
  addText:function(e){
    this.setData({
      inputText: e.detail.value,
      text:''
    })    
  },
  changeTodo:function(e){
    // 当前点击条目的status success
    // 数据 lists 跟当前条目相关的这一条数据 将status 值为1
    const index = e.currentTarget.dataset.item;
    const temp = this.data.lists;
    temp.forEach((item,i) => {
      // console.log(item,i);
      if(i == index){
        if(item.status == '0'){
          item.status = '1'
          wx.showToast({
            title:'已完成任务',
            icon:'success',
            duration:1000
          })
        }else{
          item.status = '0';
          wx.showToast({
             title:'任务打回重做',
             icon: 'circle',
             duration:1000
          })
         
        }
      }
    });
    this.setData({
      lists:temp
    })
  }
})