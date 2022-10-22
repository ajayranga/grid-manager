import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { getAlertSaga } from './saga';

export const initialState = {
  allAlerts: [],
  pageNum: 1,
  totalAlerts: 0,
  loading: false,
  error: '',
  success: false,
};

const allAlertSlice = createSlice({
  name: 'allAlerts',
  initialState,
  reducers: {
    fetch(state, action) {
      state.loading = true;
    },
    done(state, action) {
      state.allAlerts = action.payload.allAlerts;
      state.pageNum = action.payload.pageNum;
      state.totalAlerts = action.payload.totalAlerts;
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
      state.error = '';
      state.loading = false;
      state.success = false;
    },
    delete(state, action) {
      state.loading = true;
    },
  },
});

export const { actions: createAlertActions } = allAlertSlice;
export default allAlertSlice.reducer;

export const UseAllAlertSlice = () => {
  useInjectReducer({
    key: allAlertSlice.name,
    reducer: allAlertSlice.reducer,
  });
  useInjectSaga({
    key: allAlertSlice.name,
    saga: getAlertSaga,
  });
  return { actions: allAlertSlice.actions };
};
