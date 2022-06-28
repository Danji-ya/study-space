const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];

// --------map-----------
const map = (f, iter) => {
  let res = [];

  for(const a of iter) {
    res.push(f(a));
  }
  return res;
}

console.log(map(p => p.name, products));
console.log(map(p => p.price, products));


let m = new Map();
m.set('a', 10);
m.set('b', 20);
console.log(map(([k, v]) => [k, v * 2],m));


// -------filter----------
const filter = (f, iter) => {

  let res = [];
  for(const a of iter) {
    if(f(a)) res.push(a);
  }
  return res;
}

// 명령형
let under20000 = [];
for(const p of products) {
  if(p.price < 20000) under20000.push(p);
}
console.log(...under20000);

// 선언형
console.log(filter(p => p.price < 20000, products));


// ------reduce----------

// 명령형
const nums = [1,2,3,4,5];
let total = 0;
for(const n of nums) {
  total += n;
}

// 선언형
const reduce = (f, acc, iter) => {
  if(!iter) { // 두번째 인자로 초깃값이 없다면 iter의 첫번째 값을 초기값으로
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for(const a of iter) {
    acc = f(acc, a);
  }
  return acc;
}

console.log(reduce((a,b) => a + b, nums));

console.log(reduce((a,b) => a + b.price, 0, products));


// 중첩 사용

console.log(
  reduce(
    (a, b) => a + b,
    map(p => p.price,
      filter(p => p.price > 20000, products))));

