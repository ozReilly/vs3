export interface ListParams {
  id: number;
}
export interface RowItem {
  id:number;
  fileName:string;
}

export interface ListModel {
  code:number;
  data:RowItem[];
}
