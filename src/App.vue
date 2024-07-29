<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { ElSwitch } from 'element-plus';
import { ref } from 'vue';
const theme = ref<boolean>(true);
const themeChange = (val: boolean) => {
  console.log('themeChange', val);
  // true白天 false夜晚
  if (val) {
    document.querySelectorAll('html')[0].setAttribute('theme-colors', 'light');
  } else {
    document.querySelectorAll('html')[0].setAttribute('theme-colors', 'dark');
  }
};
themeChange(theme.value);
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>

    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <el-switch
    v-model="theme"
    inline-prompt
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #97a0ff"
    :active-icon="Sunny"
    :inactive-icon="Moon"
    @change="themeChange"
  />
  <button @click="themeChange(!theme)">{{ theme }}</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
