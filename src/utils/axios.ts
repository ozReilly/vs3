import userBaseCfgStore from '@/stores/useBaseCfg';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

/**
 * 创建一个axios实例
 */
const baseUrl = import.meta.env.VITE_API_URL;
console.log('axioosss-', baseUrl);
const HttpClient: AxiosInstance = axios.create({
  timeout: 60000,
  headers: {
    // 'Content-Type': 'application/json;charset=UTF-8',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

/**
 * 请求拦截器
 * 功能：配置请求头
 */
HttpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // const token = localStorage.getItem('token');
    // config.headers.Authorization = token ? `Bearer ${token}` : '';
    const baseCfg = userBaseCfgStore();
    config.baseURL = baseCfg.appCfg.api_domain;
    console.log('request---cfg', baseCfg.appCfg.api_domain, config);
    return config;
  },
  (error) => {
    console.error('网络请求错误，请稍后重试');

    return Promise.reject(error);
  },
);

/**
 * 响应拦截器
 * 功能：处理接口异常比如（500,403,402,401）等权限问题
 */
HttpClient.interceptors.response.use(
  (config: AxiosResponse) => {
    // 这里可以做一些响应拦截处理 403,401,500
    return config;
  },
  (error) => {
    console.error('网络请求错误，请稍后重试');
    return Promise.reject(error);
  },
);

export default HttpClient;
