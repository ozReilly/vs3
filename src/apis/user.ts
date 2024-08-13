import HttpClient from '@/utils/axios';
import { UserAccountParams, UserAccountResult, UserCaptchaParams, UserCaptchaResult, UserParams, UserTypeParams, UserTypeResult } from './model/userModel';

/**
 * 游客创建
 * @param params UserParams
 * return UserAccountResult
 */
export const userCreate = (params?: UserParams) => {
  return HttpClient.post<UserAccountResult>('app/api/visitor/create', params);
};

/**
 * 获取用户产品id，memberType
 * @param params UserTypeParams
 * return UserTypeResult
 */
export const userType = (params?: UserTypeParams) => {
  return HttpClient.post<UserTypeResult>('app/api/user/type', params);
};
/**
 * 账号登录
 * @param params UserParams
 * return UserAccountResult
 */
export const userAccount = (params: UserAccountParams) => {
  return HttpClient.post<UserAccountResult>('api/member/login/account', params);
};

/**
 * 账号登录
 * @param params UserParams
 * return UserAccountResult
 */
export const userCaptcha = (params: UserCaptchaParams | undefined) => {
  return HttpClient.post<UserCaptchaResult>('/app/api/captcha', params);
};
