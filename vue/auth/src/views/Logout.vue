<template>
    <div>logout
    <button type="text" @click="click">退出</button>
    </div>
</template>

<script>
import auth from '@/auth.js'
export default {
    methods:{
        click(){
            localStorage.clear()
            auth.ok=true
            this.$router.replace(this.$route.query.redirect || '/')
        }
    }
}
</script>

<style>

</style>
