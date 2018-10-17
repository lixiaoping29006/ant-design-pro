import Vue from 'vue'
import Router from 'vue-router'
import IndustryRankings from '@/components/dashboard/IndustryRankings'
import Dashboard2 from '@/components/dashboard/Dashboard2'
import BusinessRanking from '@/components/dashboard/BusinessRanking'
import Dashboard4 from '@/components/dashboard/Dashboard4'
import PageView from '@/components/layout/PageView'
import RouteView from '@/components/layout/RouteView'
import MenuView from '@/components/layout/MenuView'
import WorkPlace from '@/components/dashboard/WorkPlace'
import Login from '@/components/login/Login'
import MinutiasDetail from '@/component/detail/MinutiasDetail'

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
              name: '工作',
              component: WorkPlace,
              icon: 'none'
            },
            {
              path: '/dashboard/analysis',
              name: '业务排名',
              component: IndustryRankings,
              icon: 'none'
            },
            {
              path: '/dashboard/analysis2',
              name: '分析页2',
              component: Dashboard2,
              icon: 'none'
            },
            {
              path: '/dashboard/analysis3',
              name: '行业排名',
              component: BusinessRanking,
              icon: 'none'
            },
            {
              path: '/dashboard/analysis4',
              name: '应用排名',
              component: Dashboard4,
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
              component: MinutiasDetail
            }
          ]
        },
        
      ]
    }
  ]
})
