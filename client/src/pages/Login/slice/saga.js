import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { loginActions as actions } from '../slice';
import { request } from 'utils/request';

const login = function* (action) {
  delay(10);
  try {
    const requestURL = '/api/auth/';
    const data = yield call(request, requestURL, {
      method: 'post',
      data: {
        email: action.payload.email,
        password: action.payload.password,
      },
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
    yield put(actions.done(data));
    yield put(actions.success());
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

export const loginSaga = function* () {
  yield takeLatest(actions.start.type, login);
};
