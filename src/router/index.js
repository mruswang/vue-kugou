import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import rank from '@/views/rank'
import plist from '@/views/plist'
import singer from '@/views/singer'
import ringtone from '@/views/ringtone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/plist',
      name: 'plist',
      component: plist
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer
    },
    {
      path: '/ringtone',
      name: 'ringtone',
      component: ringtone
    }
  ]
})
