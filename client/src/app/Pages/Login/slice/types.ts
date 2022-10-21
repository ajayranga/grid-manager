export interface LoginState {
  userInfo: IUser;
  loading: boolean;
  error: string;
  success: boolean;
}
export interface IUser {
  name: string;
  phone: string;
  email: string;
  token: string;
}
export interface PayloadType {
  email: string;
  password: string;
} 