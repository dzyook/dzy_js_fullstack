import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import auth from '@/auth'
import Logout from '@/views/logout'
Vue.use(Router)

const requireAuth = (to,from,next) => {
  console.log(to,from)
  // 用户有登录权限吗？
  if(!auth.loggedIn()){
    next({
      path:'/login',
      query:{
        redirect:to.fullPath
      }
    })
  }
  next();
}
const requireAuth2 = (to,from,next) => {
  console.log(to,from)
  // 用户有登录权限吗？
  if(auth.loggedIn()){
    next({
      path:'/',
      query:{
        redirect:from.fullPath
      }
    })
  }
  next();
}

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/about'//跳转
    },
    {
      path: '/about',
      component:About
    },
    {
      path:'/dashboard',
      component:Dashboard,
      beforeEnter:requireAuth
    },
    {
      path:'/login',
      component:Login,
      beforeEnter:requireAuth2
      // redirect:'/dashboard'
    },
    {
      path:'/logout',
      component:Logout,
    }
  ]
})
