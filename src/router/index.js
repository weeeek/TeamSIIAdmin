import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/statis',
      children: [
        {
          path: '/',
          name: 'StatisView',
          meta: { title: '访问统计', icon: 'dashboard', affix: true },
          component: () => import('@/view/statis/view.vue')
        }
      ]
    },
    {
      path: '/404',
      component: () => import('@/views/error-page/404'),
      hidden: true
    },
    {
      path: '/401',
      component: () => import('@/views/error-page/401'),
      hidden: true
    }
  ]
})
