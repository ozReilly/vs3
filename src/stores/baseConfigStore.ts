/**
 * 这是定义基本配置信息相关的
 */

import { defineStore } from 'pinia';

export interface BaseConfig {
  app_socket: string | undefined;
  themes: string | undefined;
  control_switch: number[] | undefined;
  languages: Language[] | undefined;
  static_domain: string | undefined;
  match_socket: string | undefined;
  system_maintenance: number;
  api_domain: string | undefined;
  isn_maintain: boolean | undefined;
  inner_static_domain: string | undefined;
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
