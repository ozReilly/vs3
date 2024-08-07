import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
console.log('enter main.ts')
createApp(App).use(router).mount('#app')
