<template>
  <div class="app">
    <!-- <router-view></router-view> -->
     <nav class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/list">list</router-link>
      <router-link to="/login">login</router-link>
     </nav>
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  color: #fff;
  column-gap: 5px;
}
</style>
