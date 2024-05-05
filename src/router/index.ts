import { createRouter, createWebHistory } from 'vue-router';
import SuccessView from '@/views/SuccessView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    }
  ]
})

export default router
