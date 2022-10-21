export interface SignUpState {
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
  name: string;
  email: string;
  password: string;
  phone: string;

} 