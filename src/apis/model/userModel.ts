import { baseParams } from '@/apis/model/gameListModel.ts';

export interface UserParams extends baseParams {
  lang: string | undefined;
}

// 用户登录的的时候使用的用户类别接口
export interface UserTypeParams {
  // token: string | undefined;
  // uid: number | undefined;
  // pid: number | undefined;
  // versionCode: number | undefined;
  // versionName: string | undefined;
  // os: string | undefined;
  // osVersionName: string | undefined;
  // osVersionCode: number | undefined;
  // mac: string | undefined;
  // deviceModel: string | undefined;
  // realm: string | undefined;
  // siteNo: number | undefined;
  // process: string | undefined;
  // deviceID?: string | undefined;
  // channel?: string | undefined;
  lang: string;
  domainType: number;
}

export interface UserTypeResult {
  code: number;
  msg: string;
  data: UserTypeData;
}

export interface UserTypeData {
  loginDomain: LoginDomain[];
  businessDomain: BusinessDomain[];
  memberType: number;
  permanentDomain: PermanentDomain[];
  productNo: number;
}

export interface LoginDomain {
  id: number;
  domain: string;
  productType: number;
  productNo: number;
  agentId: number;
  use: number;
}

export interface BusinessDomain {
  id: number;
  domain: string;
  productType: number;
  productNo: number;
  agentId: number;
  use: number;
}

export interface PermanentDomain {
  domain: string;
  type: number;
  redirectType: number;
  redirectDomain: string;
  productType: number;
  productNo: number;
}

// 账号登录参数
export interface UserAccountParams extends baseParams {
  lang: string | undefined;
  account: string | undefined;
  pwd: string | undefined;
  code: string | undefined;
  captchaType: string | undefined;
  domainType: number | undefined;
}

// 账户登录后的结果
export interface UserAccountResult {
  code: number;
  msg: string;
  data: UserAccountResultData;
}

export interface UserAccountResultData {
  uid: number;
  memberId: number;
  token: string;
  realm: string;
  process: string;
  nickName: string;
  avatar: string;
  languageCode: string;
  createTime: number;
  // 差异化的数据，这里有很多中用户类型，比如小飞机、授权登录、账户登录等
  type?: number;
  memberNo?: string;
  agentId?: number;
  countryCode?: string;
  dialCode?: string;
  mobile?: string;
  email?: string;
  gender?: number;
  birthday?: string;
  status?: number;
  hasPassword?: boolean;
  hasLoginAccount?: boolean;
  hasWithdrawPwd?: boolean;
  currencyCode?: string;
  principal?: string;
  tryPlay?: number;
  pUid?: number;
  currencyId?: number;
  playerOdds?: number;
  precision?: number;
  vipLevel?: number;
  oddsConfig?: number[];
  riskAmount?: number;
  account?: string;
  inChannel?: boolean;
  channelUser?: string;
  hdpType?: number;
  hdpStyle?: number;
  domain?: string;
  sportSort?: string;
  source?: number;
  leagueIds?: any[];
  casinoSw?: number;
  lotterySw?: number;
}

export interface UserCaptchaParams extends baseParams {
  lang: string | undefined;
  time: number | undefined;
}

export interface UserCaptchaResult {
  code: number;
  msg: string;
  data: string;
}
