const { find, go } = require("./utils");
// callback은 연속적인 비동기코드방식에서는
// 가독성이 좋지 못하고
// 써드파티라이브러리인 경우 제어의 역전문제로 믿음에 대한 문제가 있음.
// 상황에따라 콜백함수 내에서 상황에 따라 에러를 던지기도 하고 에러를 출력하기도 하고 해야하는데
// 복잡한 구조에서는 스코프를 파악하기도 까다로워 에러 핸들링도 어려워짐.

function add10(a, cb){
  setTimeout(() => cb(a + 10), 100);
}
const cb = add10(5, console.log);
console.log(cb); // undefined

function add20(a) {
  return new Promise((resolve) => setTimeout(() => resolve(a+20), 100));
}
const promise = add20(5)
  .then(console.log);
console.log(promise); // Promise { <pending> }


const go1 = (a, f) => f(a);
const add5 = a => a + 5;
const delay100 = a => new Promise(resolve => 
  setTimeout(() => resolve(a), 100));

// f라는 함수가 동기적으로 동작해야한다.
// a라는 값이 동기적으로 값이 평가되어야 한다.
console.log(go1(10, add5));

// 따라서 이러한 코드는 아직 정상적으로 동작하지 않는다.
const r1 = go1(delay100(10), add5); 
console.log(r1);// [object Promise]5


// 프로미스가 1급이라는 특징을 활용해서 수정해본다면
// 인자의 값이 일급으로 다뤄질 수 있는 값이 비동기 상황인지 체크해서
const go2 = (a, f) => a instanceof Promise ? a.then(f) : f(a);
const r2 = go2(delay100(10), add5);
console.log(r2); // Promise { <pending> }
r2.then(console.log);
// 또는
go2(go2(delay100(10), add5), console.log);


// -------- 모나드는 함수를 안전하게 합성하기 위한 기법 ---------

const g1 = a => a + 1;
const f1 = a => a * a;
// // f . g // f(g(x));
// console.log('f(g(x)=', f(g(1)));
// console.log('f(g(x)=', f(g()));


const users = [
  {id: 1, name: 'aa'},
  {id: 2, name: 'bb'},
  {id: 3, name: 'cc'}
];

const getUserById = id => find(u => u.id === id, users) || Promise.reject('없는 유저입니다.');
const f = ({name}) => name;
const g = getUserById;

const fg1 = id => f(g(id));
console.log(fg1(2));

const fg2 = id => Promise.resolve(id).then(g).then(f).catch(a => a);
fg2(2).then(console.log);

setTimeout(function () {
  users.pop();
  users.pop();
  // 이 시점에 찾고자하는 유저가 없는 경우에
  fg2(2).then(console.log);
}, 10);


// ----------- go, pipe, reduce에서 비동기 제어 ---------
go(
  1,
  a => a + 10,
  a => Promise.resolve(a + 100),
  a => a + 1000,
  a => a + 10000,
  console.log
); // 11111
go(
  Promise.resolve(1),
  a => a + 10,
  a => Promise.reject(new Error('에러 발생')),
  a => a + 1000,
  a => a + 10000,
  console.log
).catch(e => console.log(e.message));

// 프로미스는 여러번 귀결 또는 이행하려고 하면 최초의 한번만 귀결 또느 이행하는 특징이 있다.