import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/createSlice';
import { useInjectReducer, useInjectSaga } from 'utils/injectors';
import { signUpSaga } from './saga';
import { IUser, SignUpState, PayloadType } from './types';

export const initialState: SignUpState = {
  userInfo: { name: '', phone: '', email: '', token: '' },
  loading: false,
  error: '',
  success: false,
};

const signUpSlice = createSlice({
  name: 'signup',
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
      state.userInfo.name = '';
      state.userInfo.phone = '';
      state.userInfo.email = '';
      state.userInfo.token = '';
      state.error = '';
      state.loading = false;
    },
  },
});

export const { actions: loginActions } = signUpSlice;
export default signUpSlice.reducer;

export const UseSignUpSlice = () => {
  useInjectReducer({
    key: signUpSlice.name,
    reducer: signUpSlice.reducer,
  });
  useInjectSaga({
    key: signUpSlice.name,
    saga: signUpSaga,
  });
  return { actions: signUpSlice.actions };
};
