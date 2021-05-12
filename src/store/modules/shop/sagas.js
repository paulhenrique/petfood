import { takeLatest, all, call, put } from 'redux-saga/effects';
import types from './types';
import api from '../../../services/api';
import { setPetshops, setPetshop } from './actions';

export function* requestPetshops() {
  const response = yield call(api.get, '/petshops');
  const res = response.data;
  yield put(setPetshops(res.petshops));
}

export function* requestPetshop(payload) {
  const response = yield call(api.get, `/petshops/${payload.id}`);
  const res = response.data;
  yield put(setPetshop(res.petshop));
}

export default all([
  takeLatest(types.REQUEST_PETSHOPS, requestPetshops),
  takeLatest(types.REQUEST_PETSHOP, requestPetshop)
]);