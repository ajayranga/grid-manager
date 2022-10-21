import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.login || initialState;

export const selectUserName = createSelector(
  [selectDomain],
  (login) => login.userInfo.name
);
export const selectEmail = createSelector(
  [selectDomain],
  (login) => login.userInfo.email
);
export const selectPhoneNumber = createSelector(
  [selectDomain],
  (login) => login.userInfo.phone
);
export const selectToken = createSelector(
  [selectDomain],
  (login) => login.userInfo.token
);

export const selectLoading = createSelector(
  [selectDomain],
  (login) => login.loading
);

export const selectError = createSelector(
  [selectDomain],
  (login) => login.error
);

export const selectSuccess = createSelector(
  [selectDomain],
  (login) => login.success
);
