export interface baseParams {
  token: string;
  uid: number;
  deviceID: string;
  pid: number;
  versionCode: number;
  versionName: string;
  os: string;
  osVersionName: string;
  osVersionCode: number;
  mac: string;
  deviceModel: string;
  channel: string;
  realm: string;
  siteNo: number;
  process: string;
}
export interface gameListParams extends baseParams {
  lang: string;
  page: number;
  size: number;
  threshold: number;
  sportId: number;
  leagueIds: string | undefined;

  teamIds: string | undefined;
  type: number;
  sport: number;
  tag: number;
  sort: number;
  oddsType: number;
  encode?: boolean;
}

export interface gameListModel {
  code: number;
  msg: string;
  data: IGameListData;
}

export interface IGameListData {
  sportId: number;
  marketIds: number[];
  leagueIds: string;
  teamIds: string;
  matchIds: string;
  memberId: number;
  type: number;
  time: string;
  sort: number;
  noTime: number;
  language: string;
  threshold: number;
  source: number;
  countMap: ICountMap;
  page: number;
  size: number;
  total: number;
  totalPage: number;
  records: IGameRecord[];
}

export interface ICountMap {
  '23': number;
  'F-0': number;
  '10000001': number;
  '10000002': number;
  'F-1': number;
  '10000005': number;
  '1': number;
  '2': number;
  '3': number;
  '4': number;
  '5': number;
  '20': number;
  '31': number;
}
export interface IGameDataM {
  h1: number;
  a1: number;
  h2: number;
  a2: number;
  h3: number;
  a3: number;
  h4: number;
  a4: number;
  h5: number;
  a5: number;
  h6: number;
  a6: number;
  h7: number;
  a7: number;
  h8: number;
  a8: number;
  h9: number;
  a9: number;
  ahet: number;
  shst: number;
  shet: number;
  othst: number;
  othet: number;
  otst: number;
  otet: number;
  met: string;
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
  h: number;
  or: number;
  i: number;
  li: number;
  l: number;
  si: string;
  m: number;
  n: number;
  q: string;
  t: string;
  lo: string;
  g: number;
  ri: number;
  mes: any[];
  ic: number;
  sb: string;
  sl: string;
  sm: string;
  sn: string;
  hi: number;
  mss: number;
  bf: number;
  il: number;
  rdt: string;
  rd: number;
  rdn: string;
  uts: number;
  so: number;
}

export interface IGameRecord {
  m: IGameDataM;
  mo: IGameDataMo;
  n: IGameDataN;
  w: number;
  x: number;
  y: number;
  gl: number;
  matchId: number;
}
interface IMoDataItem {
  md: number;
  oi: string;
  h: string;
  ah: string;
  n: string;
  o: number;
  oa: number;
  om: number;
  od: number;
  s: number;
  ao: number;
  db: number;
  ct: number;
}
interface IMoDataCategory {
  k: string;
  a: string;
  n: string;
  o: IMoDataItem[];
}
interface IGameDataMoData {
  [key: string]: {
    [key: string]: IMoDataCategory;
  };
}
export interface IGameDataMo {
  z: IGameDataMoData;
  mc: number;
  tmc: boolean;
}
interface Market {
  M: string[];
  S: {
    total?: number;
    hcp?: number;
    [key: string]: any; // 允许其他可能的属性
  };
  O: {
    [key: string]: string;
  };
}
interface IGameDataN {
  a: string; // 模拟现实联盟
  b: string; // Dutch Eredivisie SRL
  c: string; // FC Groningen Srl
  d: string; // NAC Breda Srl
  e: {
    [key: string]: string | Market;
  };
}
