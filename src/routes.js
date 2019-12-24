import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/dashboard/index.vue'),
        meta: { policy: [20, 24] }
      },
      {
        path: '/calendar',
        name: 'calendar',
        component: () => import('./views/organisation-management/index.vue'),
        meta: { policy: [20, 24] }
      },
      {
        path: '/user-management',
        name: 'user-management',
        component: () => import('./views/user-management/index.vue'),
        meta: { policy: [20, 24] }
      },
      {
        path: '/group-management',
        name: 'group-management',
        component: () => import('./views/group-management/index.vue'),
        meta: { policy: [20, 24] }
      },
      {
        path: '/section-management',
        name: 'section-management',
        component: () => import('./views/section-management/index.vue'),
        meta: { policy: [20, 24] }
      },
      {
        path: '/offerings',
        name: 'offerings',
        component: () => import('./views/offerings/index.vue'),
        meta: { policy: [20, 24] }
      },
      {
        path: '/privilages',
        name: 'privilages',
        component: () => import('./views/delivery/PrivilageTable.vue'),
        meta: { policy: [20, 24] }
      },
      {
        path: '/create-app',
        name: 'create-app',
        component: () => import('./views/app-creator/index.vue'),
        meta: { policy: [20, 24] }
      }
  ]
})
