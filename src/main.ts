import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import pinia from './stores'
console.log('enter main.ts')
createApp(App).use(pinia).use(router).use(i18n).mount('#app')
