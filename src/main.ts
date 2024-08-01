import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index';
import pinia from './stores/index';
createApp(App).use(router).use(pinia).mount('#app');
