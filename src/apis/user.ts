import HttpClient from '@/utils/axios';
import { UserAccountParams, UserAccountResult, UserCaptchaParams, UserCaptchaResult, UserParams, UserTypeParams, UserTypeResult } from './model/userModel';

/**
 * 游客创建
 * @param params UserParams
 * return UserAccountResult
 */
export const userCreate = (params?: UserParams) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  return HttpClient.post<UserAccountResult>('app/api/visitor/create', params, { baseURL: VITE_API_URL });
};

/**
 * 获取用户产品id，memberType
 * @param params UserTypeParams
 * return UserTypeResult
 */
export const userType = (params?: UserTypeParams) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  return HttpClient.post<UserTypeResult>('app/api/user/type', params, { baseURL: VITE_API_URL });
};
/**
 * 账号登录
 * @param params UserParams
 * return UserAccountResult
 */
export const userAccount = (params: UserAccountParams) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  return HttpClient.post<UserAccountResult>('api/member/login/account', params, { baseURL: VITE_API_URL });
};

/**
 * 账号登录
 * @param params UserParams
 * return UserAccountResult
 */
export const userCaptcha = (params: UserCaptchaParams | undefined) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  return HttpClient.post<UserCaptchaResult>('/app/api/captcha', params, { baseURL: VITE_API_URL });
};
