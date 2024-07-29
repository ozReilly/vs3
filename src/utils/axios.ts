import axios from 'axios';

/**
 * 创建一个实例
 */
const HttpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
});

/**
 * 请求拦截器
 * 功能：配置请求头
 */
HttpClient.interceptors.request.use((config) => {
  const token = 'testtoken';
  config.headers.token = 'Bearer' + token;

  return config;
});
/**
 * 响应拦截器
 * 功能：处理异常
 */
HttpClient.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default HttpClient;
