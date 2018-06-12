一、 扒页面 
二、 数据
author 音乐  dom 关联， 数组
talkData.td1
const talkData = {
  'td1':{
  user: {
    name: '大炮评车',
    title: '评车主持人',
    avatar: 'url'
  },
  mp3: {
    src: '',
    time: 102
  }
},
'td2':{
  user: {
    name: '大炮评车',
    title: '评车主持人',
    avatar: 'url'
  },
  mp3: {
    src: '',
    time: 102
  }
}

}

.btn  data-id ="1"
getAttribute ||  dataset
<audio id="aud_1"></audio>
<audio id="aud_2"></audio>
关连
progress_bar id  pro_1
document.getElementById('')

三、 交互
1. 播放， 暂停状态
onclick  data-status="off"
on  css 切换icon 换图片
分析它的状态
var status = this.dataset.status
if (off)
else 
td1 -> audio 播放哪一个，
音乐id 拼接算出来
2. 音乐播放
注意埋好关联id aud_tp1 
事件， 
aud_tp1  切割下得到id , talkData.
时间长度？ 
已播放占总时长的百分比，

3 进度条。
蓝颜色百分比点整个进度条的比例
css absolute transition