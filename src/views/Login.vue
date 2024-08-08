<template>
  <div class="login">
    login
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
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="formData.username" autocomplete="off" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field
          v-model="formData.password"
          autocomplete="off"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { FormInstance } from 'element-plus';

console.log('login.vue');

const formData = reactive({
  username: '',
  password: '',
});
const onSubmit = ($event: SubmitEvent | object) => {
  console.log('formData', formData, $event);
  if ($event instanceof SubmitEvent) {
    $event?.preventDefault();
  } else {
    console.log('$event', $event);
  }
};
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};
const ruleFormRef = ref<FormInstance>();
</script>

<style scoped></style>
