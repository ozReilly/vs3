<template>
  <div class="list">
    list
    <ElButton type="primary" @click="gameList">获取列表数据</ElButton>
    <!-- <ul class="item-wrapper">
    <li v-for="item in listData" :key="item.id"></li>
  </ul> -->
    <ul class="item-wrapper">
      <li v-cloak="gameListData">
        {{ gameListData }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
console.log('list.vue');

import { getGameList } from '@/apis/gameList';
import { IGameListData } from '@/apis/model/gameListModel';
// import { RowItem } from '@/apis/model/userModel';
// import { getList } from '@/apis/user';

// const listData = ref<RowItem[]>([]);
// getList({ id: 2 })
//   .then((res) => {
//     console.log('list.vue-res', res);
//     if (res.data.code !== 200) return;
//     listData.value = res.data.data;
//   })
//   .catch((err) => {
//     console.log('list.vue-err', err);
//   });

const gameListData = ref<IGameListData>();
const gameList = () => {
  getGameList({
    token: 'f419dea40d894a70b1328c9b1aeadea7',
    uid: 173587,
    pid: 888,
    versionCode: 100445,
    versionName: 'v1.4.445',
    os: 'Windows',
    osVersionName: 'Windows 10',
    osVersionCode: 10,
    mac: '2742AA39CC0D',
    deviceModel: 'Chrome 127.0.0.0',
    channel: 'default',
    realm: 'alpha',
    deviceID: 'C28E057D0FC174ED97919438C446C1EC',
    siteNo: 7,
    process: 'web',
    lang: 'zh',
    page: 1,
    size: 2,
    threshold: 50,
    sportId: 1,
    leagueIds: undefined,
    teamIds: undefined,
    type: 3,
    sport: 1,
    tag: 1,
    sort: 0,
    oddsType: 1,
    encode: true,
  }).then((res) => {
    console.log('list.vue-res', res);
    gameListData.value = res.data.data;
  });
};
</script>

<style scoped></style>
