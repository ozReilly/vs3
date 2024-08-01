/**
 * 这是定义基本配置信息相关的
 */

import { defineStore } from 'pinia';

export interface BaseConfig {
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

export const useBaseConfigStore = defineStore('baseConfig', {
  state: (): BaseConfig => ({
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
  }),
  actions: {
    setBaseConfig(baseConfig: Partial<BaseConfig>) {
      this.app_socket = baseConfig.app_socket;
      this.themes = baseConfig.themes;
      this.control_switch = baseConfig.control_switch;
      this.languages = baseConfig.languages;
      this.static_domain = baseConfig.static_domain;
    },
  },
});
