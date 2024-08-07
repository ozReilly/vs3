import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
console.log('enter main.ts')
createApp(App).use(router).use(i18n).mount('#app')
