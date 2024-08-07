<template>
  <div class="h5">
    <VanLoading />
    <VanButton type="primary">主要按钮</VanButton>
    <router-view />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.h5 {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

</style>
