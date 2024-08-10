<template>
  <div class="login" :class="[{ h5: isH5 }]">
    login {{ isH5 }}
    <Suspense>
      <template #default>
        <AsyncComponent />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
const isH5 = inject('isH5');
const AsyncComponent = defineAsyncComponent(async () => (isH5 ? await import('./loginH5.vue') : await import('./loginPc.vue')));
</script>

<style lang="scss" scoped></style>
