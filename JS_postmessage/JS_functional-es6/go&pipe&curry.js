const utils = require('./utils.js');
const { map, reduce, filter } = utils;

const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];

// 앞서 작성하였던 map, filter, reduce의 코드 가독성, 표현력을 높이는 과정
// go는 즉시 평가
const go = (...args) => reduce((a, f) => f(a), args);

go(
  0,
  a => a + 1,
  a => a + 10,
  a => a + 100,
  console.log);

// pipe는 함수를 반환하는
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const f = pipe(
    a => a + 1,
    a => a + 10,
    a => a + 100);

console.log(f(0));

// 인자를 두개 받을 수 있도록
const f2 = pipe(
  (a, b) => a + b,
  a => a + 10,
  a => a + 100);

console.log(f2(1, 5));

// 이전
// console.log(
//   reduce(
//     (a, b) => a + b,
//     map(p => p.price,
//       filter(p => p.price > 20000, products))));

// go를 활용한 코드 가독성 높이기 - 1단계
go(
  products,
  products => filter(p => p.price > 20000, products),
  products => map(p => p.price, products),
  prices => reduce((a, b) => a+b, prices),
  console.log
)

// curry
// 원하는 시점에 함수를 평가하는 함수

const curry = f => 
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._); 
// 처음 실행은 함수를 반환
// 이후에 실행할 때 인자가 두개이상이라면 즉시실행 아니면 또 다른 함수를 반환

const mult = curry((a, b) => a*b);

// 원하는 시점에 호출이 가능
const mult2 = mult(2);
console.log(mult2(5));
console.log(mult2(2));
// or
console.log(mult(5)(5));


// curry를 활용한 코드 가독성 높이기 - 2단계
go(
  products,
  products => filter(p => p.price > 20000)(products),
  products => map(p => p.price)(products),
  prices => reduce((a, b) => a+b)(prices),
  console.log
);

// 이후
go(
  products,
  filter(p => p.price > 20000),
  map(p => p.price),
  reduce((a, b) => a+b),
  console.log
)


// 함수 조합까지

// go(
//   products,
//   filter(p => p.price <= 20000),
//   map(p => p.price),
//   reduce((a, b) => a+b),
//   console.log
// )

const totalPrice = pipe(
  map(p => p.price),
  reduce((a, b) => a+b)
)

go(
  products,
  filter(p => p.price <= 20000),
  totalPrice,
  console.log
)

