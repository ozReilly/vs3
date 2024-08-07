import { createApp } from 'vue';
import './style.css';
import H5 from './H5.vue';
import router from './router/index';
import pinia from './stores/index';
console.log('我是h5 main.ts')
createApp(H5).use(router).use(pinia).mount('#app');
