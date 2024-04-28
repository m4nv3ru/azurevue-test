import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/success', component: SuccessView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router