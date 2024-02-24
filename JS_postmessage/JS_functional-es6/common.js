const { curry, map, reduce, filter, go, pipe } = require('./utils.js');

const products = [
  {name: '반팔티', price: 15000, quantity: 1, is_selected: true},
  {name: '긴팔티', price: 20000, quantity: 2, is_selected: false},
  {name: '핸드폰케이스', price: 15000, quantity: 3, is_selected: true},
  {name: '후드티', price: 30000, quantity: 4, is_selected: false},
  {name: '바지', price: 25000, quantity: 5, is_selected: false}
];

const add = (a, b) => a + b;

// 총 수량
const totalQuantity = pipe(
  map(p => p.quantity),
  reduce(add));

console.log(totalQuantity(products));

// 총 가격
const totalPrice = pipe(
  map(p => p.quantity * p.price),
  reduce(add));

console.log(totalPrice(products));


// 조금 더 추상화
const sum = curry((f, iter) => go(
  iter,
  map(f),
  reduce(add)
));

// 총 수량
const totalQuantity1 = sum(p => p.quantity);
console.log(totalQuantity1(products));

// 총 가격
// const totalPrice1 = products => sum(p => p.quantity * p.price)(products);
const totalPrice1 = sum(p => p.quantity * p.price);
console.log(totalPrice1(products));