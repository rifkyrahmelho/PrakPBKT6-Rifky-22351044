import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import Index from '@/views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainLayout',
      component: MainLayout,
      children : [
        { path: '',
          component : Index
        }
      ]
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('@/views/Error404.vue')
    }

  ]
})

export default router
