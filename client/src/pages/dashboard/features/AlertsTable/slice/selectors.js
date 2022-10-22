import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '../slice';

const selectDomain = (state) => state.allAlerts || initialState;

export const selectAllAlerts = createSelector(
  [selectDomain],
  (allAlerts) => allAlerts.allAlerts
);
export const selectTotalAlerts = createSelector(
  [selectDomain],
  (allAlerts) => allAlerts.totalAlerts
);
export const selectLoading = createSelector(
  [selectDomain],
  (allAlerts) => allAlerts.loading
);

export const selectError = createSelector(
  [selectDomain],
  (allAlerts) => allAlerts.error
);

export const selectSuccess = createSelector(
  [selectDomain],
  (allAlerts) => allAlerts.success
);
