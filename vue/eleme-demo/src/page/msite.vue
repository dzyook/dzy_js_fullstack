<template>
    <div></div>
</template>

<script>
import { cityGuess } from '@/api/getData'
export default {
    data() {
        return {
            geohash:''
        }
    },
    async beforeMount(){
        // msite 是由一个独立的项目组做的 多个spa 组成
        // /city/25?a=1
        this.cityid = this.$route.params.cityid
        // console.log(this.$route.query.geohash)
        if(this.$route.query.geohash){
            this.geohash = this.$route.query.geohash
        }else {
            const data = await cityGuess();
            this.geohash = `${data.latitude},${data.longitude}`
        }
        console.log(this.geohash)
    }
}
</script>

<style>

</style>
