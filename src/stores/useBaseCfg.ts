export interface baseParams {
  token: string | undefined;
  uid: number | undefined;
  pid: number | undefined;
  versionCode: number | undefined;
  versionName: string | undefined;
  // os: string | undefined;
  // osVersionName: string | undefined;
  // osVersionCode: number | undefined;
  // mac: string | undefined;
  // deviceModel: string | undefined;
  // realm: string | undefined;
  // siteNo: number | undefined;
  // process: string | undefined;
  deviceID?: string | undefined;
  // channel?: string | undefined;
  memberId: number | undefined;
}

const getDeviceId = () => {
  const deviceId = localStorage.getItem('deviceId');
  if (deviceId) {
    return deviceId;
  } else {
    const uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    localStorage.setItem('deviceId', uuid);
    return uuid;
  }
};
const userBaseCfgStore = defineStore('basecfg', {
  state: (): baseParams => ({
    uid: 0,
    memberId: 0,
    token: '',
    pid: 888,
    deviceID: getDeviceId(),
    versionCode: 100500,
    versionName: 'v1.5.000',
  }),

  getters: {
    memberId: (state) => state.memberId,
  },
  actions: {},
});

export default userBaseCfgStore;
