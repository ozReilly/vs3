import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { useUserStore } from './userStore';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// import { createPersistedState } from 'pinia-plugin-persistedstate';
// pinia.use(
//   createPersistedState({
//     key: (id) => `__persisted__${id}`,
//   }),
// );
export { useUserStore };
export default pinia;
