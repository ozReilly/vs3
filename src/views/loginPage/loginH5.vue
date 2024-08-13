<template>
  <div class="login-h5">
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
        <van-field v-model="formData.code" center clearable label="短信验证码" placeholder="请输入短信验证码" :rules="[{ required: true, message: '请填写短信验证码' }]">
          <template #button>
            <van-button size="small" type="primary" @click="sendCode">
              <img v-if="formData.imgCode" style="max-width: 80px; height: 30px; display: block; margin: 0 -10px; border-radius: 2px" :src="formData.imgCode" alt="imgcode" />
              <span v-else>发送验证码</span>
            </van-button>
          </template>
        </van-field>
      </van-cell-group>
      <!-- <div style="margin: 16px"> -->
      <van-cell-group inset>
        <van-button round block type="primary" native-type="submit"> 提交</van-button>
      </van-cell-group>
      <!-- </div> -->
    </van-form>
  </div>
</template>

<script setup lang="ts">
import useLogin from './useLogin';
console.log('loginH5.vue');
const { onSubmit, formData, sendCode } = useLogin();
</script>

<style scoped></style>
