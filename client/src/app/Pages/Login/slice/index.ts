import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/createSlice';
import { useInjectReducer, useInjectSaga } from 'utils/injectors';
import { loginSaga } from './saga';
import { IUser, LoginState, PayloadType } from './types';

export const initialState: LoginState = {
  userInfo: { name: '', phone: '', email: '', token: '' },
  loading: false,
  error: '',
  success: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    start(state, action: PayloadAction<PayloadType>) {
      state.loading = true;
    },
    done(state, action: PayloadAction<IUser>) {
      state.userInfo.name = action.payload.name;
      state.userInfo.email = action.payload.email;
      state.userInfo.phone = action.payload.phone;
      state.userInfo.token = action.payload.token;
      state.error = '';
      state.loading = false;
    },
    success(state, action: PayloadAction) {
      state.error = '';
      state.loading = false;
      state.success = true;
    },
    failed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    reset(state, action: PayloadAction) {
      state = initialState;
    },
  },
});

export const { actions: loginActions } = loginSlice;
export default loginSlice.reducer;

export const UseLoginSlice = () => {
  useInjectReducer({
    key: loginSlice.name,
    reducer: loginSlice.reducer,
  });
  useInjectSaga({
    key: loginSlice.name,
    saga: loginSaga,
  });
  return { actions: loginSlice.actions };
};
