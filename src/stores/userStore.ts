/**
 * 这是用户基本信息模块逻辑
 * 通过pinia定义一个store为user的全局对象
 */
import { defineStore } from 'pinia';
// 定义一个用户对象接口来规范数据对象
export interface UserInfo {
  memberId: number;
  uid: number;
  token: string;
  realm: string;
  process: string;
  type: number;
  memberNo: string;
  agentId: number;
  nickName: string;
  avatar: string;
  countryCode: string;
  languageCode: string;
  dialCode: string;
  mobile: string;
  email: string;
  gender: number;
  birthday: string;
  status: number;
  createTime: number;
  hasPassword: boolean;
  hasLoginAccount: boolean;
  hasWithdrawPwd: boolean;
  currencyCode: string;
  principal: string;
  tryPlay: number;
  pUid: number;
  currencyId: number;
  playerOdds: number;
  precision: number;
  vipLevel: number;
  oddsConfig: number[];
  riskAmount: number;
  account: string;
  inChannel: boolean;
  channelUser: string;
  hdpType: number;
  hdpStyle: number;
  sportSort: string;
  source: number;
  leagueIds: any[];
  casinoSw: number;
  lotterySw: number;
}

export const useUserStore = defineStore('user',{
  state: (): Partial<UserInfo> => ({
    memberId: 0,
    uid: 0,
    token: '',
    // realm: '',
    // process: '',
    // type: 0,
    // memberNo: '',
    // agentId: 0,
    // nickName: '',
    // avatar: '',
    // countryCode: '',
    // languageCode: '',
    // dialCode: '',
    // mobile: '',
    // email: '',
    // gender: 0,
    // birthday: '',
    // status: 0,
    // createTime: 0,
    // hasPassword: false,
    // hasLoginAccount: false,
    // hasWithdrawPwd: false,
    // currencyCode: '',
    // principal: '',
    // tryPlay: 0,
    // pUid: 0,
    // currencyId: 0,
    // playerOdds: 0,
    // precision: 0,
    // vipLevel: 0,
    // oddsConfig: [],
    // riskAmount: 0,
    // account: '',
    // inChannel: false,
    // channelUser: '',
    // hdpType: 0,
    // hdpStyle: 0,
    // sportSort: '',
    // source: 0,
    // leagueIds: [],
    // casinoSw: 0,
    // lotterySw: 0,
    // 这里可以相关的初始化状态数据
  }),
  getters: {
    // 获取用户信息
    // getUserInfo: (state) => state,
    // 获取用户名
    getUserName: (state) => state.nickName,
    // 获取用户头像
    getUserAvatar: (state) => state.avatar,
    // 获取meberid 是否存在，判断登录
    getMemberId: (state) => state.memberId,
  },

  actions: {
    async fetchUserData(userId: number) {
      try {
        // 发起网络请求获取用户数据
        const response = await axios.get(`/api/users/${userId}`);
        // 更新 state
        this.$patch(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    },
    // 登录
    login(userInfo: UserInfo) {
      console.log('useUserStore-login', userInfo);
      this.$patch(userInfo);
    },
    // uid 做唯一的key储存
    // 退出登录
    logout() {
      this.$reset(); // 快速重置成初始化对象
    },
  },
  persist: {
    storage: window.localStorage,
    // paths: ['memberId', 'uid', 'token'],
  },
});
