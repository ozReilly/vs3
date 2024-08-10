<template>
  <div class="login">
    login {{ isH5 }}
    <AsyncComponent />
  </div>
</template>

<script setup>
const isH5 = inject('isH5');
const AsyncComponent = defineAsyncComponent(async () => (isH5 ? await import('./loginH5.vue') : await import('./loginPc.vue')));
</script>

<style lang="scss" scoped></style>
