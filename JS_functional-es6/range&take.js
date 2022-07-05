const { reduce } = require("./utils");

const add = (a, b) => a + b;

const range = (l) => {
  let i = -1;
  const res = [];
  while(++i < l){
    res.push(i);
  }
  return res;
}

const list1 = range(4);
console.log(list1);
console.log(reduce(add, list1));


const L = {};

// 느긋한 L.range
L.range = function *(l) {
  let i = -1;
  while(++i < l) {
    yield i;
  }
}

const list2 = L.range(4);
console.log(list2); // 아직 평가가 안됨.
// iterator 내부에서 순회할때 마다 하나씩 평가 // list.next();
console.log(reduce(add, list2));

// 간단한 속도 테스트

function test(name, time, f){
  console.time(name);
  while(time--) f();
  console.timeEnd(name);
}

// test('range', 10, () => reduce(add, range(1000000)));
// test('L.range', 10, () => reduce(add, L.range(1000000)));



// 배열의 앞부분을 시작으로 특정 갯수의 요소만을 가져오는 함수 
const take = (l, iter) => {
  let res = [];
  for(const a of iter) {
    res.push(a);
    if(res.length === l) return res;
  }
  return res;
}

// range는 100000 개 요소를 가진 배열을 만들지만 L.range는 그때그떄 평가되기 때문에 5개의 요소만
// test('range', 1, () => take(5, range(1000000)));
// test('L.range', 1, () => take(5, L.range(1000000)));


L.map = function *(f, iter) {
  for(const a of iter) {
    yield f(a);
  }
}
const add10 = (a) => a + 10;
console.log(...L.map(add10, [1, 2, 3]));

L.filter = function *(f, iter) {
  for(const a of iter) {
    if(f(a)) yield a;
  }
}
const isDivide2 = (a) => a % 2;
console.log(...L.filter(isDivide2, [1, 2, 3, 4]));