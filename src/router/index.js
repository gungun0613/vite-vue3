import { createRouter, createWebHashHistory} from 'vue-router';

import Layout from '@/layout/layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/base',
        component: () => import('@/views/base/index.vue')
      },
      {
        path: '/base-directive',
        component: () => import('@/views/base-directive/index.vue')
      },
      {
        path: '/css-scope',
        component: () => import('@/views/css-scope/index.vue')
      }
    ]
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router