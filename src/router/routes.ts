const routes = [
  { path: '/', redirect: '/home'},
  {
    path: '/login',
    component: () => import('@/pages/login.vue'), //路由懒加载
  },
  {
    path: '/home',
    component: () => import('@/pages/home.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/notFound.vue'),
  },
];

export default routes;
