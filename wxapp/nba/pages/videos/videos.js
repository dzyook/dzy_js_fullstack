Page({
  data: {
    toView: 'yellow',
    scrollLeft: 0,
    //滚动的数组
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
  
  },
  scrollToRed:function(e)
  {

    this.setData({
      toView: 'd25'
    })
  },
  scrollTo100: function (e) {
    this.setData({
      scrollLeft: 100
    })
  },
  
  upper: function (e) {
    console.log('滚动到顶部')
  },
  lower: function (e) {
    console.log('滚动到底部')
  },
  scroll: function (e) {
    console.log(e)
  },
})
