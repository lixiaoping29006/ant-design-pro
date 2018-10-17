import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/components/layout/PageView'
import RouteView from '@/components/layout/RouteView'
import MenuView from '@/components/layout/MenuView'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: Login,
      invisible: true
    },
    {
      path: '/',
      name: '首页',
      component: MenuView,
      redirect: '/login',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: RouteView,
          icon: 'dashboard',
          children: [
            {
              path: '/dashboard/workplace',
              name: '工作台',
              component: () => import('@/components/dashboard/WorkPlace'),
              icon: 'none'
            },
            {
              path: '/dashboard/analysis',
              name: '行业排名',
              component: () => import('@/components/dashboard/IndustryRankings'),
              icon: 'none'
            },
            {
              path: '/dashboard/analysis2',
              name: '分析页2',
              component: () => import('@/components/dashboard/Dashboard2'),
              icon: 'none'
            },
            {
              path: '/dashboard/analysis3',
              name: '业务排名',
              component: () => import('@/components/dashboard/BusinessRanking'),
              icon: 'none'
            },
            {
              path: '/dashboard/analysis4',
              name: '应用排名',
              component: () => import('@/components/dashboard/Dashboard4'),
              icon: 'none'
            }
          ]
        },
        {
          path: '/detail',
          name: '详情页',
          icon: 'profile',
          component: RouteView,
          children: [
            {
              path: '/detail/minutias',
              name: '数据详情页',
              icon: 'none',
              component: () => import('@/components/detail/MinutiasDetail')
            }
          ]
        },
      ]
    }
  ]
})
