import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import accomodation from './accomodation';
import watchAccomodation from './sagas/accomodationSaga';
import searchForm from './searchForm';

const rootReducer = combineReducers({
  searchForm,
  accomodation,
});

export function* rootSaga() {
  yield all([watchAccomodation()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜준다.
}

export default rootReducer;
