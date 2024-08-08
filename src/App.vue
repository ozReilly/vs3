<template>
  <div class="app">
    <!-- <router-view></router-view> -->
    <nav class="nav">
      <router-link to="/">{{ $t('nav.home') }}</router-link>
      <router-link to="/list">{{ $t('nav.list') }}</router-link>
      <router-link to="/login">{{ $t('nav.login') }}</router-link>
      <router-link to="/detail/1">{{ $t('nav.use', '用户信息') }}</router-link>
    </nav>
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

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
