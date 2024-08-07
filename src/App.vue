<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { useUserStore } from '@/stores';
import { UserInfo } from '@/stores/userStore';
const theme = ref<boolean>(false);
const themeChange = ($event: Event, val = theme) => {
  console.log('themeChange', val.value, $event);
  // true白天 false夜晚
  if (val.value) {
    document.querySelectorAll('html')[0].setAttribute('theme-colors', 'light');
  } else {
    document.querySelectorAll('html')[0].setAttribute('theme-colors', 'dark');
  }
  val.value = !val.value;
};

// import { ElSwitch, ElButton } from 'element-plus';
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);
const userStore = useUserStore();
console.log('userStore', userStore);
const accountLogin = ($event: Event) => {
  console.log('accountLogin', $event);
  const userInfo: UserInfo = {
    memberId: 150555,
    uid: 173587,
    token: 'fec729685b7147848fe26489f74440b9',
    realm: 'alpha',
    process: 'web',
    type: 2,
    memberNo: '713732587',
    agentId: 101173,
    nickName: 'fan',
    avatar: '/upload/avatar/default.png',
    countryCode: '',
    languageCode: 'zh',
    dialCode: '',
    mobile: '',
    email: '',
    gender: 0,
    birthday: '',
    status: 0,
    createTime: 1717510866093,
    hasPassword: true,
    hasLoginAccount: false,
    hasWithdrawPwd: false,
    currencyCode: 'CNY',
    principal: '',
    tryPlay: 0,
    pUid: 0,
    currencyId: 1,
    playerOdds: 1,
    precision: 2,
    vipLevel: 0,
    oddsConfig: [0, 0, 0, 0, 0],
    riskAmount: 0,
    account: 'bm008',
    inChannel: false,
    channelUser: '',
    hdpType: 0,
    hdpStyle: 0,
    sportSort: '[1,2,3,4,20,5,23,10000001,10000002,10000005,31]',
    source: 0,
    leagueIds: [],
    casinoSw: 1,
    lotterySw: 1,
  };
  // const userStore = useUserStore();

  userStore.login(userInfo);
};
const accountLogout = () => {
  userStore.logout();
};
const getMemberId = computed(() => userStore.memberId);

const pushArr = ref([1, 2, 3]);
const pushTest = () => {
  pushArr.value.push(4);
};
watch(pushArr.value, (newVal, oldVal) => {
  console.log('newVal', newVal, 'oldVal', oldVal, isRef(pushArr));
});
onMounted(() => {
  console.log('onMounted', userStore.memberId);
  if (userStore.memberId) {
    console.log('onMounted', userStore.memberId);
  }
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>

    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <el-switch
    v-model="isDark"
    inline-prompt
    active-text="dark"
    size="large"
    inactive-text="light"
    @change="toggleDark(isDark)"
  />
  <button @click="themeChange">{{ theme }}</button>
  <button @click="accountLogin($event)">{{ getMemberId }}账户登录测试</button>
  <button v-if="userStore.memberId" @click="accountLogout">退出</button>
  <br />
  {{ pushArr }}
  <el-button @click="pushTest">push ceshi</el-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
