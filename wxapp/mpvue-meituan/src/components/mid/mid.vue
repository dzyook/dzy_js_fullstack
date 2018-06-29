<template>
    <div class="mid">
        <div class="mid-line">
            <div class="line" v-for="(item,index) of midimg" :key="index">
                <div class="one">
                    <image class="img" :src="item.url" alt="#"/>
                </div>
                <span>{{item.text}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['midimg']
}
</script>

<style lang="stylus">
.mid
  width 100%
  height 300rpx
  background-color  #fff
  position absolute
  top 250rpx
  z-index 0
  border-bottom  0.5rpx solid #EEE8E8
  .mid-line
   width 100%
   height 200rpx
   padding-top 80rpx
   font-size 25rpx
   font-family '微软雅黑','宋体',Arial, Helvetica, sans-serif;
   display flex
   text-align center
   align-items center
   justify-content center
   .line
    margin-left 40rpx
    margin-right 40rpx 
    .one
     width 100rpx
     height 100rpx
     background #E3453A
     border-radius 50%
     margin-bottom 15rpx
     display flex
     align-items center
     justify-content center
     .img
      width 50rpx
      height 50rpx  
.mid:after
  content: "" 
  display: block 
  position: absolute  
  bottom: 0  
  left: 0 
  right: 0
  top:0
  width 100% 
  height: 2rpx  
</style>
