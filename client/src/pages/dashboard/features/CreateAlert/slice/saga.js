import { call, put, takeLatest, delay, select } from 'redux-saga/effects';
import { createAlertActions as actions } from '../slice';
import { request } from 'utils/request';
import { selectToken } from 'pages/Login/slice/selectors';
import { selectToken as selectSignUpToken } from 'pages/SignUp/slice/selectors';

const createAlert = function* (action) {
  delay(10);
  try {
    const requestURL = '/api/alert';
    const loginToken = yield select(selectToken);
    const signUpToken = yield select(selectSignUpToken);
    if (loginToken !== '' || signUpToken !== '') {
      yield call(request, requestURL, {
        method: 'post',
        headers: {
          Authorization: `Bearer ${
            loginToken !== '' ? loginToken : signUpToken
          }`,
        },
        data: {
          name: action.payload.name,
          phone: action.payload.phone,
          email: action.payload.email,
          criteria: action.payload.criteria,
          value: action.payload.value,
          alertDays: action.payload.alertDays,
          priceSignal: action.payload.priceSignal,
        },
      });
      yield put(actions.success());
    } else {
      yield put(actions.failed('No Token found'));
    }
  } catch (error) {
    process.env.NODE_ENV === 'development' && console.log(error);
    yield put(
      actions.failed(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const createAlertSaga = function* () {
  yield takeLatest(actions.start.type, createAlert);
};
