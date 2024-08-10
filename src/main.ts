import '@/style.css';
import App from '@/App.vue';
import router from '@/router';
import i18n from '@/i18n';
import pinia from '@/stores';
import { isH5 } from './utils/tools';

// import 'element-plus/dist/index.css';

// import 'vant/lib/index.css';

console.log('enter main.ts');

console.log('config:', import.meta.env);
createApp(App).use(pinia).use(router).use(i18n).provide('isH5', isH5()).mount('#app');
