//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show:false,
    inputText:'',
    text:'',
    focus:'',
  },
  clearIcon:function (e){
      const inputText = e.detail.value;
      const input =this.data.inputText;
      let that = this;
      console.log(input);
      var xun = setTimeout(function(){
         if(inputText == ""){
        that.setData({
          show:false,
        })
      }else{
      that.setData({
        inputText,
        show:true,
        focus:true,
      })
    }
      },10)
    },
    clearText:function (e){
      this.setData({
        inputText:'',
        focus:false,
        show:false
      })
    },
    loginnum:function(e){
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/; 
      const phone =this.data.inputText;
      if(phone == ""){ return;}
      else{
      if(!myreg.test(phone)) {
        wx.showToast({
          title:'手机号错误',
          icon:'../../image/取消.png',
          duration:2000
        })
        return false;
      }else {
        console.log("手机号正确");
        return true;
      }
    }
  },
  alerttxt:function(e) {
    wx.showModal({
      title:'58到家用户协议',
      content:'模拟大堆条款',
      success:function(res){
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }      
  
})
