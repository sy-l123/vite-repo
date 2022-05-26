import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    // children: [
    //   {
    //     path: '/',
    //     name: 'home',
    //     meta: {
    //       title: '首页',
    //     },
    //     component: Home,
    //   },
    // ],
  },
  {
    path: '/scoreCardList',
    name: 'scoreCardList',
    meta: {
      title: '积分卡列表',
    },
    component: () => import(/* webpackChunkName: "categoryList" */ '../views/score-manage/score-card-list.vue'),
  },
  {
    path: '/.*/',
    name: 'Page404',
    component: () => import(/* webpackChunkName: "Page404" */ '../views/404.vue'),
  },
];

export default routes;
