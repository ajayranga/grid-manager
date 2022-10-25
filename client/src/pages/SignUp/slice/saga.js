import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { loginActions as actions } from '../slice';
import { request } from 'utils/request';

const signUp = function* (action) {
  delay(10);
  try {
    const requestURL = '/api/auth/signup';
    const data = yield call(request, requestURL, {
      method: 'post',
      data: {
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        password: action.payload.password,
        role: action.payload.role,
        token: action.payload.token,
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

export const signUpSaga = function* () {
  yield takeLatest(actions.start.type, signUp);
};
