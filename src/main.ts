import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import store from './stores'
console.log('enter main.ts')
createApp(App).use(router).use(i18n).use(store).mount('#app')
