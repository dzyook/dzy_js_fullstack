<template>
    <div class="box-song" :style="{height:height+'px'}">
        <div class="onepage">
            <div class="background">
                <div class="filter"></div>
                <img :src="song.picUrl" style="width:100%;height:100%;font-size:100%">
            </div>
            <div class="header">{{song.singername}}</div>
            <circle-t :midimg3="midimg3" :img="song.picUrl" :playing="playing"></circle-t>
            
            <div class="bigfoot">
                <div class="bigtiao">
                <p>{{notime}}</p>
                <div class="tiao">
                    <div class="tiaotop" :style="width"></div>
                    <div class="cl" :style="midwidth">
                        <div class="cl-mid" ></div>
                    </div>
                </div>
                <p>{{alltime}}</p>
            </div>
            <div class="foot">
                <div class="one">
                    <img class="left" :src="wayimg" @click="playway">
                </div>
                <div class="two">
                    <img class="left2" src="/static/images/index/left.png">
                </div>
                <div class="three">
                    <img class="midd" :src="middimg" @click="playsong">
                </div>
                <div class="four">
                    <img class="right2" src="/static/images/index/right.png">
                </div>
                <div class="five">
                    <img class="right" src="/static/images/index/list.png">
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import fly from '@/utils/flyio';
import circle from '@/components/circle/circle';
export default {
    data(){
        return {
            allmiao: 1,
            state: 1,
            playing: true,
            song: {
                singername:'',
                picUrl:''
            },
            height: 0,
            midimg3: [],
            nowmiao: 0,
        }
    },
    computed:{
        width () {
            return 'width:'+(this.nowmiao/this.allmiao)*100+'%'
        },
        midwidth() {
            return 'transform:translate3d('+(this.nowmiao/this.allmiao)*250+'px,0px,0px);'
        },
        notime () {
            if(Math.round(this.nowmiao % 60) < 10) return '0'+Math.floor(this.nowmiao/60)+':0'+Math.round(this.nowmiao%60)
          else  return '0'+Math.floor(this.nowmiao/60)+':'+Math.floor(this.nowmiao%60)
        },
        alltime () {
          if(Math.round(this.allmiao % 60) < 10) return '0'+Math.floor(this.allmiao/60)+':0'+Math.floor(this.allmiao%60)
          else  return '0'+Math.floor(this.allmiao/60)+':'+Math.floor(this.allmiao%60)
        },
        wayimg () {
            if(this.state == 1) return '/static/images/index/one.png'
            if(this.state == 2) return '/static/images/index/liebiao.png'
            if(this.state == 0) return '/static/images/index/suiji.png'
        },
        middimg () {
            if(this.playing) return '/static/images/index/down.png'
            else if(!this.playing) return '/static/images/index/play2.png'
        },
        tiaowidth () {
            return 0+'rpx'
        },
        nowtime () {
            return '0'
        }
    },
    components:{
        'circle-t':circle
    },
    methods:{
        playway () {
            this.state = (this.state+1)%3
        },
        playsong () {
            if(this.playing) {
                this.audioCtx.pause();
                this.playing = false}
            else if(!this.playing) {
                this.audioCtx.play();
                this.playing = true;
            }
        },
    },
    mounted(){
        let options = this.$root.$mp.query;
        if(options.name == 'undefined'){
        fly
        .get("music#!method=get")
        .then(res => {
          let re = res.data.data.footimg;
          this.midimg3 = res.data.data.midimg3;
          for (var i = 0; i < re.length; i++) {
            if (options.id == re[i].id) {
                for(var j=0;j<re[i].songlist.length;j++) {
                    if(options.songid == re[i].songlist[j].id){
                        Object.assign(this.song, re[i].songlist[j]);
                        break}}
                break
            }
          }
            wx.setNavigationBarTitle({
        // 设置当前标题
        title: decodeURIComponent(this.song.name)
        });
        this.audioCtx = wx.createInnerAudioContext()
        console.log(this.audioCtx.paused)
        this.audioCtx.src = this.song.mp3url
        this.audioCtx.play();
        this.playing = true
        const a = setInterval(()=>{
        this.allmiao = this.audioCtx.duration
        },50)
        if(this.allmiao){
            clearInterval('a')
        }
        this.audioCtx.onTimeUpdate(()=>{
            this.nowmiao = this.audioCtx.currentTime
        })
        
        })
        .catch(e => {
          console.log(e);
        }); 
        }
       this.height = wx.getSystemInfoSync().windowHeight
    },
}
</script>
<style lang="stylus">
.box-song
    width 100%
    padding 0
    border 0

.onepage
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 10
    background #f2f3f4
        
.background
    position absolute
    left -50%
    top -50%
    width 300%
    height 300%
    z-index -1
    opacity 0.6
    filter blur(30px)
    -webkit-filter blur(30px)

.filter
    position absolute
    width 100%
    height 100%
    background black 
    opacity .6

.header
    position relative
    width 100%
    height 50rpx
    font-size 30rpx
    color #f1f1f1
    text-align center
    line-height 50rpx

.bigfoot
    position fixed
    width 100%
    height 200rpx
    bottom 50rpx

.bigtiao
    width 100%
    height 50rpx
    display flex
    align-items center
    justify-content center
    font-size 23rpx
    font-weight 300
    color #fff
.tiao
    margin-left 15rpx
    margin-right 15rpx
    width 550rpx
    height 8rpx
    background #ADAAA8
    position relative
    .tiaotop
        height 8rpx
        background #d44439
    .cl
        position absolute
        top -9rpx
        bottom 0
        left 0
        right 0
        height 35rpx
        width 35rpx
        .cl-mid
           top 17rpx
           left 14rpx
           box-sizing border-box
           width 30rpx
           height 30rpx
           border-radius 50%
           background #d44439
           border 5px solid #f1f1f1 

.foot
    width 100%
    height 150rpx
    display flex
    justify-content space-around
    align-items center

.two,.four,.left2,.right2
        width 90rpx
        height 90rpx

.one,.left
        width 60rpx
        height 60rpx

.five,.right
        width 50rpx
        height 50rpx

.three,.midd
        width 110rpx
        height 110rpx


</style>
