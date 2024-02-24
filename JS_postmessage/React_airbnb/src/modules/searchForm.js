import { createAction, handleActions } from 'redux-actions';

// action 정의
const SET_LOCATION = 'searchForm/SET_LOCATION';
const SET_CHECKIN = 'searchForm/SET_CHECKIN';
const SET_CHECKOUT = 'searchForm/SET_CHECKOUT';
const SET_GUESTNUM = 'searchForm/SET_GUESTNUM';

// action object 생성
export const setLocation = createAction(SET_LOCATION, location => location);
/* same to {
  type: searchForm/SET_LOCATION
  payload: location
}
*/
export const setCheckin = createAction(SET_CHECKIN, checkin => checkin);
export const setCheckout = createAction(SET_CHECKOUT, checkout => checkout);
export const setGuestNum = createAction(SET_GUESTNUM);

// initial state
const initialState = {
  location: '',
  checkin: '',
  checkout: '',
  guestNum: {
    adult: 0,
    child: 0,
    infant: 0,
  },
};

// reducer
// function searchForm(state = initialState, action) {
//   switch (action.type) {
//     case SET_LOCATION:
//       return {
//         ...state,
//         location: state.location,
//       };

//     case SET_CHECKIN:
//       return {
//         ...state,
//         checkin: state.checkin,
//       };

//     case SET_CHECKOUT:
//       return {
//         ...state,
//         checkout: state.checkout,
//       };
//     case SET_GUESTNUM:
//       return {
//         ...state,
//         guestNum: {
//           ...state.guestNum,
//           guestNum: state.guestNum,
//         },
//       };

//     default:
//       return state;
//   }
// }
const searchForm = handleActions(
  {
    [SET_LOCATION]: (state, { payload: location }) => {
      return {
        ...state,
        location,
      };
    },
    [SET_CHECKIN]: (state, { payload: checkin }) => {
      return {
        ...state,
        checkin,
      };
    },
    [SET_CHECKOUT]: (state, { payload: checkout }) => {
      return {
        ...state,
        checkout,
      };
    },
    [SET_GUESTNUM]: (state, { payload: guestNum }) => {
      return {
        ...state,
        guestNum,
      };
    },
  },
  initialState,
);

export default searchForm;
