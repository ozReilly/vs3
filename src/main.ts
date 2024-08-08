import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import router from '@/router';
import i18n from '@/i18n';
import pinia from '@/stores';

// import elementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// import vant from 'vant';
import 'vant/lib/index.css';

console.log('enter main.ts');
createApp(App).use(pinia).use(router).use(i18n).mount('#app');
