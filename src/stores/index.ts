// import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)
// export default pinia

// 全局持久化配置
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(
  createPersistedState({
    storage: sessionStorage,
  })
)
export default pinia
