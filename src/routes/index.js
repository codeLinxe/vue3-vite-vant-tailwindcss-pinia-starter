import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { showNotify } from 'vant'

const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

router.beforeEach((to, from) => {
  // TODO 前置守卫
})

router.beforeResolve(to => {
  // TODO 解析守卫 确保用户可以访问自定义 meta 属性
  if (import.meta.env.MODE === 'development') {
    // TODO 开发模式
  }
})

router.afterEach((to, from) => {
  // TODO 后置钩子
})

export default (app => {
  app.use(router)
})