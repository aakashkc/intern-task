import { API_REQUEST, apiSuccess, apiFailure } from '../action/action';
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';



const delay = (ms) => new Promise(res => setTimeout(res, ms))  
  function* fetchDataSaga() {
    try {
      yield delay(1000)

      const response = yield call(axios.get, 'https://admin.naxa.com.np/api/services');
      yield put(apiSuccess(response.data));
    } catch (error) {
      yield put(apiFailure(error.message));
    }
  }
  
  export function* rootSaga() {
    yield takeLatest(API_REQUEST, fetchDataSaga);
  }