import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '../slice';

const selectDomain = (state) => state.signup || initialState;

export const selectUserName = createSelector(
  [selectDomain],
  (signup) => signup.userInfo.name
);
export const selectEmail = createSelector(
  [selectDomain],
  (signup) => signup.userInfo.email
);
export const selectPhoneNumber = createSelector(
  [selectDomain],
  (signup) => signup.userInfo.phone
);
export const selectRole = createSelector(
  [selectDomain],
  (signup) => signup.userInfo.role
);
export const selectToken = createSelector(
  [selectDomain],
  (signup) => signup.userInfo.token
);

export const selectLoading = createSelector(
  [selectDomain],
  (signup) => signup.loading
);

export const selectError = createSelector(
  [selectDomain],
  (signup) => signup.error
);

export const selectSuccess = createSelector(
  [selectDomain],
  (signup) => signup.success
);
