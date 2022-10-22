import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createAlertSaga } from './saga';

export const initialState = {
  loading: false,
  error: '',
  success: false,
};

const createAlertSlice = createSlice({
  name: 'createAlert',
  initialState,
  reducers: {
    start(state, action) {
      state.loading = true;
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
      state.error = '';
      state.loading = false;
      state.success = false;
    },
  },
});

export const { actions: createAlertActions } = createAlertSlice;
export default createAlertSlice.reducer;

export const UseCreateAlertSlice = () => {
  useInjectReducer({
    key: createAlertSlice.name,
    reducer: createAlertSlice.reducer,
  });
  useInjectSaga({
    key: createAlertSlice.name,
    saga: createAlertSaga,
  });
  return { actions: createAlertSlice.actions };
};
