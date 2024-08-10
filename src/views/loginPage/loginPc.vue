<template>
  <div class="login-pc">
    <ElForm ref="ruleFormRef" :model="formData" @submit="onSubmit">
      <ElFormItem label="用户名" prop="username" :rules="[{ trigger: 'blur', required: true, message: '请填写用户名' }]">
        <ElInput v-model="formData.username" placeholder="请输入用户名" autocomplete="off" />
      </ElFormItem>
      <el-form-item label="密码" prop="password" :rules="[{ trigger: 'blur', required: true, message: '请填写密码' }]">
        <ElInput v-model="formData.password" placeholder="请输入密码" type="password" autocomplete="off" />
      </el-form-item>
      <ElFormItem>
        <!-- <ElButton round block type="primary" native-type="submit" > 提交 </ElButton> -->
        <ElButton round block type="primary" @click="submitForm(ruleFormRef)"> 提交 </ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import useLogin from './useLogin';

const { onSubmit, formData, submitForm, ruleFormRef } = useLogin();
</script>

<style scoped></style>
