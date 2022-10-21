import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { loginActions as actions } from '.';
import { IUser, PayloadType } from './types';
import { request } from 'utils/request';

const signUp = function* (action: PayloadAction<PayloadType>) {
  delay(10);
  try {
    console.log(action.payload)
    const requestURL = '/api/auth/signup';
    const data: IUser = yield call(request, requestURL, {
      method: 'post',
      data: {
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
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

export const signUpSaga = function* () {
  yield takeLatest(actions.start.type, signUp);
}; 