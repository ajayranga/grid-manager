import { LoginState } from 'app/Pages/Login/slice/types';
import { SignUpState } from 'app/Pages/SignUp/slice/types';

export interface RootState {
  login: LoginState;
  signup: SignUpState
}
