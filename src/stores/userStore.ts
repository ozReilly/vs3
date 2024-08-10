// defineStore 第一个参数是id，必需且值唯一
export interface IUserInfo {
  name: string;
  age: number;
}
export interface IUserState {
  token: string;
  userInfo: IUserInfo;
}
type UserState = {
  userInfo: IUserInfo;
  token: string;
};

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userInfo: {
      name: 'zhangsan',
      age: 23,
    },
    token: 'S1',
  }),

  getters: {
    vipName: (state) => state.userInfo.name + 'vip',
  },
  actions: {
    //更新整个对象
    updateUserInfo(userInfo: IUserInfo) {
      this.userInfo = userInfo;
    },
    //更新对象中某个属性
    updateAge(age: number) {
      this.userInfo.age = age;
    },
    //更新基础数据类型
    updateToken(token: IUserState['token']) {
      this.token = token;
    },
  },

  persist: {
    storage: localStorage,
    beforeRestore: (ctx) => {
      console.log(`即将恢复 '${ctx.store.$id}'`);
      console.log(ctx.store.$state);
    },
    afterRestore: (ctx) => {
      console.log(`刚刚恢复完 '${ctx.store.$id}'`);
    },
    // paths:['userInfo']
  },
});
