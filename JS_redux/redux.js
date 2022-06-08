// data 기본
const initState = { name: 'who are you' }

// action 객체
const CHANGE_NAME = 'CHANGE_NAME';
const actionChangeName = (newName) => {
  return {
    type: CHANGE_NAME,
    payload: newName
  }
}

// reducer 함수
const userReducer = (state = initState, action) => {
  switch(action.type) {
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.payload
      }
    }
    default:
      return state;
  }
}
// store 생성 및 리듀서 등록
const store = Redux.createStore(userReducer);
const subscribe = (cb) =>  store.subscribe(cb);
const getState = () => store.getState();
const dispatch = (cb) => store.dispatch(cb);


export {
  subscribe,
  getState,
  dispatch,
  actionChangeName
}
