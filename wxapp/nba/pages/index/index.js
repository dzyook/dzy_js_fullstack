//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showLeft:false,
    showRight:false,
    canshow:true,
    move:true,
    light:2,
    index:1,
    scrollLeft:0,
    agenda: {

    },
    date:[
      { id:'d22',
        time:"05月22日",
      },
      { id:'d23',
        time:"05月23日",
      },
      { id:'d24',
        time:"05月24日",
      },
      { id:'d25',
        time:"05月25日",
      },
    ],
    result:[
      { id:'d22',
        leftteam:"../../images/indextop/4.png",
        leftgrade:102,
        leftname:'马刺',
        rightteam:"../../images/indextop/5.png",
        rightgrade:111,
        rightname:'骑士',
      },
      { id:'d23',
        leftteam:"../../images/indextop/10.png",
        leftgrade:95,
        leftname:'火箭',
        rightteam:"../../images/indextop/9.png",
        rightgrade:92,
        rightname:'勇士',
      },
      { id:'d24',
        leftteam:"../../images/indextop/5.png",
        leftgrade:83,
        leftname:'骑士',
        rightteam:"../../images/indextop/4.png",
        rightgrade:96,
        rightname:'马刺',
      },
      { id:'d25',
        leftteam:"../../images/indextop/9.png",
        leftgrade:94,
        leftname:'勇士',
        rightteam:"../../images/indextop/10.png",
        rightgrade:98,
        rightname:'火箭',
      },
    ],
    news:[
      {
        contentId:'n1',
        title:'历史第一！东西部同时“抢七”,这是人生不能错过的比赛',
        from:'南方都市报',
        image:'../../images/news/new1.jpg'
      },
      {
      contentId:'n2',
      title:'火箭“放风”G6战术不变, 打法不变! 总决赛等保罗回归!',
      from:'时刻说历史',
      image:'../../images/news/new2.png'
      },
      {
        contentId:'n3',
        title:'三个“杜皮匠”还不如一个“詹姆亮”? KD和詹皇的差距有多大?',
        from:'榴莲体育',
        image:'../../images/news/new3.png'
      },
      {
        contentId:'n4',
        title:'哈登称抢七毫无压力 库里：一战定生死很有趣',
        from:'ESPN',
        image:'../../images/news/new4.jpg'
      },
      {
        contentId:'n5',
        title:'骑士三大隐患或输掉抢七大战, 这次巴克利也不看好他们!',
        from:'体育之窗',
        image:'../../images/news/new5.jpeg'
      },
      {
        contentId:'n6',
        title:'恭喜勇士赢下生死战, 但是也别小看了抢七大战, 四巨头存亡之战',
        from:'大娱说',
        image:'../../images/news/new6.jpeg'
      },
      {
        contentId:'n7',
        title:'火箭队被勇士队末节大屠杀, 哈登有着不可推卸的责任!',
        from:'篮球技巧君',
        image:'../../images/news/new7.png'
      },
      {
        contentId:'n8',
        title:'火箭、勇士、骑士、绿军能否晋级总决赛? 肖华: 结果已定',
        from:'NBA国度',
        image:'../../images/news/new8.png'
      },
    ],
  },
  onLoad: function () {
    this.init();
  },
  init: function() {
    let leftgrade = this.data.result[this.data.index].leftgrade;   
    let rightgrade = this.data.result[this.data.index].rightgrade;
    let grade = leftgrade>rightgrade?'1':'2';
    this.setData({
      agenda:this.data.result[this.data.index],
      index:this.data.index,
      light:grade,
      scrollLeft:204,  
    })
  },
  // scroll:function(e){
  //   const move = this.data.move;
  //   if(120<e.detail.scrollLeft<204&&move){
  //     this.setData({
  //       scrollLeft:204,
  //       move:false
  //     })
  //   }
  // },
  //事件处理函数
  turnleft:function (e) {
    const index = this.data.index-1;
    let that =this;
    that.setData({
      index:index,
      scrollLeft:204*(index),
    })
   setTimeout(function(){
    if(index <0){
        return;
    }else if(index==0){
        that.setData({
        showLeft:true,
        agenda:that.data.result[index],
        light:that.data.result[index].leftgrade>that.data.result[index].rightgrade?'1':'2',
        index:index,
        scrollLeft:204*(index),
        })
    }else{
    that.setData({
      agenda:that.data.result[index],
      index:index,
      scrollLeft:204*(index),
      light:that.data.result[index].leftgrade>that.data.result[index].rightgrade?'1':'2',
      showLeft:false,
      showRight:false,
    })
  }
},50)
  },
  turnright:function (e) {
    const index = this.data.index+1;
    let that =this;
    setTimeout(function(){
    if(index >=4){
      return;
    }else if(index ==3){
      that.setData({
      agenda:that.data.result[index],
      index:index,
      scrollLeft:204*(index),
      light:that.data.result[index].leftgrade>that.data.result[index].rightgrade?'1':'2',
      showRight:true,
      })
    }
    else{
    that.setData({
      agenda:that.data.result[index],
      scrollLeft:204*(index),
      index:index,
      showRight:false,
      showLeft:false,
      light:that.data.result[index].leftgrade>that.data.result[index].rightgrade?'1':'2',
    })
    }
  },50)
  },
})
