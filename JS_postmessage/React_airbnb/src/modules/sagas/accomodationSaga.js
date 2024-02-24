import { call, put, takeEvery } from 'redux-saga/effects';
import axiosInstance from '../../api-config';
import { getAccomodationFail, getAccomodationSuccess, GET_ACCOMODATIONLIST } from '../accomodation';

const getAccomodationAPI = location => axiosInstance.get('dummy/data.json');

function* getAccomodationListSaga({ payload: location }) {
  console.log('숙소 찾기 시작...', location);
  try {
    const {
      data: { accomodationList },
    } = yield call(getAccomodationAPI, location);
    yield put(getAccomodationSuccess(accomodationList));
  } catch (e) {
    yield put(getAccomodationFail(e));
  }
}

// GET_ACCOMODATIONLIST 액션이 dispatch 되면 getAccomodationListSaga 제너레이터를 실행한다
export default function* watchAccomodation() {
  yield takeEvery(GET_ACCOMODATIONLIST, getAccomodationListSaga);
}
