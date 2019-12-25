import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('./views/Dashboard.vue')
      },
      {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('./views/Calendar.vue')
      },
      {
        path: '/inbox',
        name: 'Inbox',
        component: () => import('./views/Inbox.vue')
      },
      {
        path: '/invoice',
        name: 'Invoice',
        component: () => import('./views/Invoicing.vue')
      },
      {
        path: '/lab-exp',
        name: 'Lab-exp',
        component: () => import('./views/Lab-exp.vue')
      }
  ]
})
