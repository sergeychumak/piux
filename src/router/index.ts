import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../additions/layouts/main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/form/:id?',
        name: 'Form',
        component: () => import(/* webpackChunkName: "dynamic-form-page" */ '../additions/pages/dynamic-form-page.vue'),
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
