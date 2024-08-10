import HttpClient from '@/utils/axios';
import { ListModel, ListParams } from './model/userModel';

export const getList = (params: ListParams) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  console.log('VITE_API_URL', VITE_API_URL);

  return HttpClient.get<ListModel>('/api/user/list', { params });
};
