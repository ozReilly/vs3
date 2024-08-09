import HttpClient from '@/utils/axios';
import { gameListModel, gameListParams } from './model/gameListModel';

export const getGameList = (params: gameListParams) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  console.log('VITE_API_URL', VITE_API_URL);
  return HttpClient.post<gameListModel>('match/list', params, { baseURL: VITE_API_URL,headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });

};
