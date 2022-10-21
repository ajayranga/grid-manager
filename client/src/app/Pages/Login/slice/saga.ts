import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { loginActions as actions } from '.';
import { IUser, PayloadType } from './types';
import { request } from 'utils/request';

const login = function* (action: PayloadAction<PayloadType>) {
  delay(10);
  try {
    const requestURL = '/api/auth/';
    const data: IUser = yield call(request, requestURL, {
      method: 'post',
      data: {
        email: action.payload.email,
        password: action.payload.password,
      }
    })
    yield put(actions.done(data));
    yield put(actions.success());
  } catch (error: any) {
    process.env.NODE_ENV === 'development' && console.log(error);
    yield put(actions.failed(error.response && error.response.data.message
      ? error.response.data.message
      : error.message,));
  }
};

export const loginSaga = function* () {
  yield takeLatest(actions.start.type, login);
}; 