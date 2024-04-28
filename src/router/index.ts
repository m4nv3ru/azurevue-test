import { createRouter, createWebHistory } from 'vue-router';
import SuccessView from '@/views/SuccessView.vue';
import AuthenticatedView from '@/views/AuthenticatedView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    }, 
    {
      path: "/api",
      name: "api",
      component: AuthenticatedView
    }
  ]
})

export default router
