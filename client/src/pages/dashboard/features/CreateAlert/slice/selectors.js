import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '../slice';

const selectDomain = (state) => state.createAlert || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  (createAlert) => createAlert.loading
);

export const selectError = createSelector(
  [selectDomain],
  (createAlert) => createAlert.error
);

export const selectSuccess = createSelector(
  [selectDomain],
  (createAlert) => createAlert.success
);
