<template>
    <div>
       <h2>Login</h2>
       <form @submit.prevent="login">
           <label>
               <input type="text" placeholder="email" v-model="email"/>
           </label>
           <label for="">
               <input type="password" placeholder="password" v-model="pass"/>
           </label>
           <button type="submit" >Login</button>
            <!-- login 已完成, 再来login 跳转到首页
            logout 退出 清空token -->
        </form> 
    </div>
</template>

<script>
import auth from '@/auth.js'
export default {
    data(){
        return {
            email:'dzy@example.com',
            pass:''
        }
    },
    mounted(){
        console.log(this.$route.query)
    },
    methods:{
        login() {
            // 验证(email,pass) => auth.login()
            // 失败,成功 localStorage.setItem('token',1231)
            // 1.auth.login 传参, callback
            // localStorage.clear()
            auth.login(this.email,this.pass,(loggedIn)=>{
                console.log(loggedIn)
                console.log(this.$router)
                console.log(this.$route.query.redirect)
                if(loggedIn){
                    auth.ok = false
                  this.$router.replace(this.$route.query.redirect || '/')
                }
            })
        }
    }
};
</script>

<style>
</style>
