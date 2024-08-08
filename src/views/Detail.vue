<template>
  <div class="detail">
    detail
    <div>姓名：{{ userInfo.name }} 年龄：{{ userInfo.age }}</div>
    <div>token：{{ token }}</div>
    <div>getter值：{{ vipName }}</div>
    <button @click="handleUser">更新用户</button>
    <button @click="handleAge">更新年龄</button>
  </div>
</template>

<script setup lang="ts">
console.log('detail.vue')
import { useUserStore } from '../stores/userStore'
const userStore = useUserStore()
const { userInfo, token, vipName } = storeToRefs(userStore)
const { updateUserInfo, updateAge } = userStore
const handleUser = () => {
  updateUserInfo({
    name: '小明',
    age: 18,
  })
}
const handleAge = () => {
  updateAge(22)
}
</script>

<style scoped></style>
