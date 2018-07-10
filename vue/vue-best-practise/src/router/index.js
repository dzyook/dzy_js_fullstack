import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LogTime from '@/components/LogTime'
import NotFound from '@/components/404'
import TimeEntries from '@/components/TimeEntries'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/time-entries',
      component: TimeEntries,
      children: [{
        path: 'log-time',
        component: LogTime
      }]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
