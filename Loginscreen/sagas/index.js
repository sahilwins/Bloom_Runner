/* eslint-disable prettier/prettier */
import {all} from 'redux-saga/effects';
import {watchLoginRequest} from './Login';
import {watchBookingRequest} from './Booging';
import {watchProfileRequest} from './userProfile';

function* rootSaga() {
  yield all([
    watchLoginRequest(),
    watchBookingRequest(),
    watchProfileRequest(),
  ]);
}

export default rootSaga;
