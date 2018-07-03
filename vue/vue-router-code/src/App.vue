<template>
   <div class="recommend-list" ref="recommendList">
          <h1 class="title">推荐歌单</h1>
          <ul>
            <li class="item" v-for="item in playList" :key="item.id">
              <div class="icon" >
                <img :src="item.picUrl">
                <div class="gradients"></div>
                <img >
              </div>
              <p class="play-count">
                <i class="fa fa-headphones"></i>
                {{Math.floor(item.playCount / 10000) }}万
              </p>
              <div class="text">
                <p class="name">{{item.name}}</p>
              </div>
            </li>
          </ul>
        </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {getBanner, getRecommendList, getRecommendMusic} from './api/recommend'
import {ERR_OK} from './common/js/config'
import {createRecommendSong} from './common/js/song'
export default {
  name: 'App',
  data(){
    return {
      banner: [],
      playList: [],
      recommendMusic: []
    }
  },
  components: {
    HelloWorld
  },
  created () {
    this._getBanner()
    this._getRecommendList()
    this._getRecommendMusic()
    // this.$refs.recommendList.style.
  },
  methods:{
    _getBanner () {
      getBanner().then((res) => {
        if (res.status === ERR_OK) {
          // let list = res.data.banners.map((item) => {
          //   if (item.)
          // })
          let list = res.data.banners
          this.banner = list.splice(4)
          // console.log(this.banner)
        } else {
          console.error('Banner 获取失败')
        }
      })
    },
    _getRecommendList () {
      getRecommendList().then((res) => {
        if (res.status === ERR_OK) {
          this.playList = res.data.result
          console.log(this.playList)
        } else {
          console.error('getRecommendList 获取失败')
        }
      })
    },
    _getRecommendMusic () {
      getRecommendMusic().then((res) => {
        if (res.status === ERR_OK) {
          let list = res.data.result.map((item) => {
            return createRecommendSong(item)
          })
          list.splice(9)
          this.recommendMusic = list
          console.log(this.recommendMusic)
        } else {
          console.error('getRecommendMusic 获取失败')
        }
      })
    },
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
