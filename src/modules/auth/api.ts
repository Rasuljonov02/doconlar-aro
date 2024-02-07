import { http } from 'services';
import { IApi } from './types';
import { config } from 'config';
import { IEdit } from 'pages/madallar/types';

export const Login = (data: IApi.Login.Request) => http.post<IApi.Login.Response>('/auth/login', data);
export const Register = (data: IApi.Register.Request) => http.post<IApi.Register.Response>('/auth/register', data);
export const Me = ({ token }: IApi.Me.Request) =>
  http.get<IApi.Me.Response>('/auth/me', { headers: { [config.api.tokenKEY]: token } });


  export const Edit1 = (data: IEdit.User, token: string) => http.post<IEdit.User>('/shops', data, { headers: { [config.api.tokenKEY]: token } });
  export const Info1 = (id: string, data: IEdit.User, token: string) => 
  http.put<IEdit.User>(`/shops/${id}`, data, { headers: { [config.api.tokenKEY]: token } });
