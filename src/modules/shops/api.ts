import { http } from 'services';
import { IApi, IEntity } from './types';


export const List = () =>
  http.get<IApi.List.Response>('/shops');

export const Single = ({ shopId }: IApi.Single.Request) =>
  http.get<IApi.Single.Response>(`/shops/${shopId}`);
  
export const Delete = (id: string) =>
  http.delete<IApi.Delete.Request>(`/shops/${id}`);

  export const Update = (id: string, data: IApi.Update.Request) => 
  http.put<IApi.Update.Request>(`/shops/${id}`, data);
  

  export const SellerUser = (id: string, data: IEntity.Seller) => 
  http.put<IEntity.Seller>(`/shops/${id}/seller`, data);
  
  export const Creat = (data:IApi.Add.Request) =>
  http.post('/shops', data)
