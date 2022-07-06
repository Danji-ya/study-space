// reduce와 take는 결과를 만드는 함수
// 아래의 모든 코드들은 결국 take 또는 reduce와 같이 결과를 내는 함수가 마지막에 있다.

const { reduce, map, go, pipe, curry, L, take, filter } = require("./utils");

// URL의 queryString을 얻어내는 함수
const queryStr1 = pipe(
  Object.entries,
  map(([k, v]) => `${k}=${v}`),
  reduce((a, b) => `${a}&${b}`) // 다형성이 높은 join함수가 될 수도 있다.
)
console.log(queryStr1({limit: 10, offset: 10, type: 'notice'}));

const join = curry((seq = ',', iter) => reduce((a, b) => `${a}${seq}${b}`, iter));
const queryStr2 = pipe(
  Object.entries,
  map(([k, v]) => `${k}=${v}`),
  join('&')
)
console.log(queryStr2({limit: 10, offset: 10, type: 'notice'}));

function *genfunc() {
  yield '010';
  yield '1234';
  yield '5678';
}

// console.log(genfunc().join('-')); // genfunc(...).join is not a function
console.log(join('-', genfunc()));


L.entries = function *(obj) {
  for(const k in obj) yield [k, obj[k]];
} // 기존의 object.entries처럼 이미 평가된 값이 아닌 지연평가를 위한 entries

const queryStr3 = pipe(
  L.entries,
  L.map(([k, v]) => `${k}=${v}`),
  join('&'),
)
console.log(queryStr3({limit: 10, offset: 10, type: 'notice'}));

// ----------------find------------------
const users =[
  {age: 32,},
  {age: 31,},
  {age: 37,},
  {age: 29,},
  {age: 15,},
  {age: 40,},
  {age: 10,},
  {age: 50,},
  {age: 60,},
]

const find = (f, iter) => go(
  iter,
  L.filter(f),
  take(1)
);

console.log(find(u => u.age < 30, users));

// ---------- map 간단하게 수정 -----------
// 1단계
const map1 = curry((f, iter) => go(
  iter,
  L.map(f),
  take(Infinity)
));

// 2단계
// L.map의 인자로 iterable을 바로 넘겨도 된다.
const map2 = curry((f, iter) => go(
  L.map(f, iter),
  take(Infinity)
));

// 3단계
// 인자가 곧 그 다음 시작하는 함수의 인자이기 때문에 pipe함수로 변경
const map3 = curry(pipe(L.map, take(Infinity)));

console.log(map3((a) => a + 10, L.range(4)));

// ---------- filter 간단하게 수정 -----------
// 1단계
const filter1 = curry((f, iter) => go(
  iter,
  L.filter(f),
  take(Infinity)
));
const filter2 = curry((f, iter) => go(
  L.filter(f, iter),
  take(Infinity)
));
const filter3 = curry(pipe(L.filter, take(Infinity)));

console.log(filter3((n) => n%2, L.range(4)));

// ---------- flatten ------------

const isIterable = (a) => a && a[Symbol.iterator];

L.flatten = function *f(iter) {
  for(const a of iter) {
    // if(isIterable(a)) for (const b of a) { console.log('a=', b); yield b}
    if(isIterable(a)) yield *f(a);
    else yield a;
  }
}

go(
  [[1, 2], 3, 4, [5, 6, 7]],
  L.flatten,
  take(Infinity),
  console.log
);

const flatten = pipe(L.flatten, take(Infinity));
console.log(flatten([[1, 2], 3, 4, [5, 6, 7, [8, 9]]]));

// ---------- flatMap ------------
const arr = [[1, 2], [3, 4], [5, 6, 7]];
console.log(arr.flatMap(a => a.map(a => a + 1)));

// 조금 더 효율성이 있는 flatMap을 구현
L.flatMap = curry(pipe(L.map, L.flatten));

go(
  arr,
  L.flatMap(map(a => a + 1)),
  take(Infinity),
  console.log
)

// ----------- 2차원 배열 다루기 -----------
const twoDArr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10]
];

go(arr,
  L.flatten,
  L.filter(a => a % 2),
  take(2),
  console.log
);

// -------- 실무적인 코드 ----------
const colleagues = [
  {
    name: 'a', age: 21, family: [
      {name: 'a1', age: 53}, {name: 'a2', age: 47},
      {name: 'a3', age: 16}, {name: 'a4', age: 15}
    ]
  },
  {
    name: 'b', age: 24, family: [
      {name: 'b1', age: 58}, {name: 'b2', age: 51},
      {name: 'b3', age: 19}, {name: 'b4', age: 22}
    ]
  },
  {
    name: 'c', age: 31, family: [
      {name: 'c1', age: 64}, {name: 'c2', age: 62}
    ]
  },
  {
    name: 'd', age: 20, family: [
      {name: 'd1', age: 42}, {name: 'd2', age: 42},
      {name: 'd3', age: 11}, {name: 'd4', age: 7}
    ]
  }
];

go(colleagues,
  L.map(c => c.family), // 2차원 배열이라고 생각해도 무방
  L.flatten,
  L.filter(c => c.age < 20), // 성인이 아닌 동료 가족구성원들
  L.map(c => c.name),
  take(4),
  console.log
  )

go(colleagues,
  L.flatMap(c => c.family),
  L.filter(c => c.age < 20), // 성인이 아닌 동료 가족구성원들
  L.map(c => c.name),
  take(4),
  console.log
  )

// 데이터를 어떻게 구성할지를 먼저 만들어내고 코딩하는 것이 아닌
// 조합되어있는 함수에 맞게 데이터를 구성하는 방식으로 코딩하는 것
// 보다 함수가 우선순위에 있는 프로그래밍 방식
