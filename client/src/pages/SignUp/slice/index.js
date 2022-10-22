import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { signUpSaga } from './saga';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : { name: '', phone: '', email: '', token: '' };

export const initialState = {
  userInfo: userInfoFromStorage,
  loading: false,
  error: '',
  success: userInfoFromStorage.name !== '',
};

const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    start(state, action) {
      state.loading = true;
    },
    done(state, action) {
      state.userInfo.name = action.payload.name;
      state.userInfo.email = action.payload.email;
      state.userInfo.phone = action.payload.phone;
      state.userInfo.token = action.payload.token;
      state.error = '';
      state.loading = false;
    },
    success(state, action) {
      state.error = '';
      state.loading = false;
      state.success = true;
    },
    failed(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    reset(state, action) {
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
