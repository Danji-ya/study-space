import { actionChangeName, dispatch, getState, subscribe } from "./redux.js";

Title();
// 데이터 변화가 일어나면 Title함수를 다시 호출하겠다는 의미
subscribe(Title);

function Title() {
  const { name } = getState();
  document.querySelector('.name').textContent = name;
}

document.querySelector('.name-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  dispatch(actionChangeName(name));
});

