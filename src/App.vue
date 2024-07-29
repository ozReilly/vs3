<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { ref } from 'vue';
const theme = ref<boolean>(false);
const themeChange = ($event: Event, val = theme) => {
  console.log('themeChange', val.value, $event);
  // true白天 false夜晚
  if (val.value) {
    document.querySelectorAll('html')[0].setAttribute('theme-colors', 'light');
  } else {
    document.querySelectorAll('html')[0].setAttribute('theme-colors', 'dark');
  }
  val.value = !val.value;
};

// import { ElSwitch } from 'element-plus';
// import { useDark, useToggle } from '@vueuse/core';
// const isDark = useDark();
// const toggleDark = useToggle(isDark);
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
  <!-- <el-switch
    v-model="isDark"
    inline-prompt
    active-text="dark"
    size="large"
    inactive-text="light"
    @change="toggleDark(isDark)"
  /> -->
  <button @click="themeChange">{{ theme }}</button>
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
