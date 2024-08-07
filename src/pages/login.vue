<template>
  <h1>login</h1>
  <el-button @click="router.push('/')">返回</el-button>
  <el-form>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="formData.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="formData.password"></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const router = useRouter()
const formData = ref({
  username: '',
  password: '',
});
</script>

<style scoped></style>
