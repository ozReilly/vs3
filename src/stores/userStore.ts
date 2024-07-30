/**
 * 这是用户基本信息模块逻辑
 * 通过pinia定义一个store为user的全局对象
 */
import { defineStore } from 'pinia';

// 定义一个用户对象接口来规范数据对象
export interface UserInfo {
  username: string;
  password: string;
  token: string;
  avatar: string;
}

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: { username: 'sy', avatar: '' },
    };
  },
  actions: {
    // 登录
    login(userInfo: UserInfo) {
      this.userInfo = userInfo;
    },
    // 退出登录
    logout() {
      this.userInfo = { username: '', avatar: '' };
    },
  },
});
