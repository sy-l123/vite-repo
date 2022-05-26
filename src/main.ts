import { createApp } from 'vue';
import * as ElIconModules from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import { createRouter, createWebHistory } from 'vue-router';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import routes from './route';
import App from './App.vue';
import 'element-plus/dist/index.css';
import './assets/css/base.less';

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, _, next) => {
  console.log('app router ===>', to);
  next();
});

const app = createApp(App)
  .use(ElementPlus, { locale })
  .use(router);

// 统一注册Icon图标
Object.keys(ElIconModules).forEach((key) => {
  app.component(key, ElIconModules[key as keyof typeof ElIconModules]);
});

app.mount('#app');
