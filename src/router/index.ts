import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/List.vue'),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    meta: { auth: true },

    component: () => import('@/views/Detail.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/loginPage/index.vue'),
  },
];
import userBaseCfgStore from '@/stores/useBaseCfg';
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
console.log('stores-index.ts');

router.beforeEach(async (to, from, next) => {
  const initCfg = userBaseCfgStore();
  const flag = !initCfg.appCfg.api_domain;
  console.log('app-----start before initCfg', flag);
  if (flag) await initCfg.InitCfg();
  console.log('app-----start after initCfg');
  const token = localStorage.getItem('token');
  console.log('beforeEach', to, from);
  if (to.meta?.auth && !token) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
