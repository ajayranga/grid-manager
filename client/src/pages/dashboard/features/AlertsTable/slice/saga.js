import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { createAlertActions as actions } from '../slice';
import { request } from 'utils/request';

const fetchAlert = function* (action) {
  delay(10);
  try {
    const pageNum = action.payload.pageNum ? action.payload.pageNum : 1;
    const requestURL = `/api/alert?pageNum=${pageNum}`;
    const token = JSON.parse(localStorage.getItem('userInfo')).token;
    if (token === '') {
      yield put(actions.failed('No Token found'));
    } else {
      const data = yield call(request, requestURL, {
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      yield put(actions.done(data));
      yield put(actions.success());
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
const deleteStart = function* (action) {
  delay(10);
  try {
    const _id = action.payload.id ? action.payload.id : '';
    const pageNum = action.payload.pageNum ? action.payload.pageNum : '';
    const requestURL = `/api/alert/${_id}?pageNum=${pageNum}`;
    const token = JSON.parse(localStorage.getItem('userInfo')).token;
    if (token === '') {
      yield put(actions.failed('No Token found'));
    } else {
      const data = yield call(request, requestURL, {
        method: 'delete',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      yield put(actions.done(data));
      yield put(actions.success());
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

export const getAlertSaga = function* () {
  yield takeLatest(actions.fetch.type, fetchAlert);
  yield takeLatest(actions.delete.type, deleteStart);
};
