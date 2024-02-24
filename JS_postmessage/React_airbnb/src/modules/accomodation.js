import { createAction, handleActions } from 'redux-actions';

// 액션 정의
export const GET_ACCOMODATIONLIST = `accomodation/GET_ACCOMODATIONLIST`;
export const GET_ACCOMODATIONLIST_SUCCESS = `accomodation/GET_ACCOMODATIONLIST_SUCCESS`;
export const GET_ACCOMODATIONLIST_FAIL = `accomodation/GET_ACCOMODATIONLIST_FAIL`;

// saga에서 호출하는 액션 객체
export const getAccomodationList = createAction(GET_ACCOMODATIONLIST, location => location);
export const getAccomodationSuccess = createAction(
  GET_ACCOMODATIONLIST_SUCCESS,
  accomodationList => accomodationList,
);
export const getAccomodationFail = createAction(GET_ACCOMODATIONLIST_FAIL, e => e);

const initialState = {
  accomodationList: [],
};

// reducer 생성
const accomodation = handleActions(
  {
    [GET_ACCOMODATIONLIST_SUCCESS]: (state, { payload: accomodationList }) => {
      return {
        ...state,
        accomodationList: [...state.accomodationList, ...accomodationList],
      };
    },
  },
  initialState,
);

export default accomodation;
