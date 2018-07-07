<template>
    <div class="loginContainer">
        <head-top head-title="登录" goBack="true"></head-top>
        <img :src="captchCodeImg" v-if="captchCodeImg" style="margin-top:2rem"/>
    </div>
</template>

<script>
import headTop from '@/components/headTop'
import { getcaptchas } from '@/api/getData'
// 业务经验一: navigationBar的封装
// history title 居中 右边的buttons
export default {
    data(){
        return{
            captchCodeImg:'',
            codeNumber:null,
        }
    },
    components:{
        'head-top':headTop
    },
    methods:{
        async getCaptchaCode(){
            // api
            const res = await getcaptchas();
            this.captchCodeImg = res.code;
            console.log(res.code);
        }
    },
    mounted() {
        this.getCaptchaCode()
    }
}
</script>

<style>

</style>
