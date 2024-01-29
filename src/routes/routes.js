const home = () => import('../views/home.vue')

export const routes = [
  {
    path: '/',
    component: home
  }
]