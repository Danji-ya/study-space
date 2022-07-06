const curry = f => 
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

// const map = curry((f, iter) => {
//   let res = [];

//   iter = iter[Symbol.iterator]();
//   let cur;
//   while(!(cur = iter.next()).done) {
//     const a = cur.value;
//     res.push(f(a));
//   }
//   return res;
// });
// const filter = curry((f, iter) => {

//   let res = [];
//   iter = iter[Symbol.iterator]();
//   let cur;
//   while(!(cur = iter.next()).done) {
//     const a = cur.value;
//     if(f(a)) res.push(a);
//   }
//   return res;
// });
const reduce = curry((f, acc, iter) => {
  if(!iter) { // 두번째 인자로 초깃값이 없다면 iter의 첫번째 값을 초기값으로
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }
  let cur;
  while(!(cur = iter.next()).done) {
    const a = cur.value;
    acc = f(acc, a);
  }
  return acc;
});
const go = (...args) => reduce((a, f) => f(a), args);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);


const range = (l) => {
  let i = -1;
  const res = [];
  while(++i < l){
    res.push(i);
  }
  return res;
}

const take = curry((l, iter) => {
  let res = [];
    iter = iter[Symbol.iterator]();
  let cur;
  while(!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(a);
    if(res.length === l) return res;
  }
  return res;
});

// L object
const L = {};
L.range = function *(l) {
  let i = -1;
  while(++i < l) {
    yield i;
  }
}
L.map = curry(function *(f, iter) {
    iter = iter[Symbol.iterator]();
  let cur;
  while(!(cur = iter.next()).done) {
    const a = cur.value;
    yield f(a);
  }
});
L.filter = curry(function *(f, iter) {
    iter = iter[Symbol.iterator]();
  let cur;
  while(!(cur = iter.next()).done) {
    const a = cur.value;
    if(f(a)) yield a;
  }
});

const map = curry(pipe(L.map, take(Infinity)));
const filter = curry(pipe(L.filter, take(Infinity)));

// flatten
const isIterable = (a) => a && a[Symbol.iterator];
L.flatten = function *f(iter) {
  for(const a of iter) {
    if(isIterable(a)) yield *a;
    else yield a;
  }
}
L.deepFlat = function* f(iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* f(a);
    else yield a;
  }
};
const flatten = pipe(L.flatten, take(Infinity));
// flatMap
L.flatMap = curry(pipe(L.map, L.flatten));
const flatMap = curry(pipe(L.map, flatten));

module.exports = {
  curry,
  map,
  filter,
  reduce,
  go,
  pipe,
  range,
  take,
  L,
  flatten,
  flatMap
}