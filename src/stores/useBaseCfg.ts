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

export interface basecfgResult {
  code: number;
  msg: string;
  data: basecfgResultData;
}

export interface basecfgResultData {
  app_socket: string;
  themes: string;
  control_switch: number[];
  languages: Language[];
  static_domain: string;
  match_socket: string;
  system_maintenance: number;
  api_domain: string;
  isn_maintain: boolean;
  inner_static_domain: string;
}

export interface Language {
  code: string;
  name: string;
  path: string;
}

import HttpClient from '@/utils/axios';
import { FixUrl } from '@/utils/tools';
import fingerprintjs from '@fingerprintjs/fingerprintjs';
const getDeviceId = async () => {
  const data = (await (await fingerprintjs.load()).get()).visitorId;
  console.log('getDeviceId-data', data);
  return data;
};
const baseUrl = import.meta.env.VITE_API_URL;

const userBaseCfgStore = defineStore('basecfg', {
  state: () => {
    return {
      baseParams: <baseParams>{
        uid: 0,
        memberId: 0,
        token: '',
        pid: 888,
        deviceID: '',
        versionCode: 100500,
        versionName: 'v1.5.000',
      },
      appCfg: <basecfgResultData>{
        app_socket: '',
        themes: '',
        control_switch: [],
        languages: [],
        static_domain: '',
        match_socket: '',
        system_maintenance: 0,
        api_domain: '',
        isn_maintain: false,
        inner_static_domain: '',
      },
    };
  },

  getters: {
    memberId: (state) => state.baseParams.memberId,
  },
  actions: {
    async InitCfg() {
      this.baseParams.deviceID = await getDeviceId(); // 初始化浏览器指纹
      const { data } = await HttpClient.get<basecfgResult>(baseUrl);
      console.log('baseUrl-data', data);
      this.$patch((state) => {
        state.appCfg.api_domain = FixUrl(data.data.api_domain);
        state.appCfg.app_socket = FixUrl(data.data.app_socket);
        state.appCfg.control_switch = data.data.control_switch;
        state.appCfg.inner_static_domain = data.data.inner_static_domain;
        state.appCfg.isn_maintain = data.data.isn_maintain;
        state.appCfg.languages = data.data.languages;
        state.appCfg.match_socket = data.data.match_socket;
        state.appCfg.static_domain = data.data.static_domain;
        state.appCfg.system_maintenance = data.data.system_maintenance;
        state.appCfg.themes = data.data.themes;
      });
    },
    initBaseParam(param: baseParams) {
      this.$patch((state) => {
        state.baseParams = {
          ...param,
        };
      });
    },
  },
});

export default userBaseCfgStore;
