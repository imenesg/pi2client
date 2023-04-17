import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/TabelaRastreios.vue')
    },
    {
      path: '/rastreio/:id',
      name: 'cadastro-rastreio',
      component: () => import('../views/CadastroRastreio.vue')
    },
    {
      path: '/meus-rastreios',
      name: 'meus-rastreios',
      component: () => import('../views/TabelaRastreios.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/rastrear-codigo/:codigo',
      name: 'rastreio',
      component: () => import('../views/Rastreio.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !sessionStorage.getItem("user")) next({ name: 'login' })
  else next()
})


export default router
