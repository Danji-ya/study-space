const curry = f => 
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
  let res = [];

  for(const a of iter) {
    res.push(f(a));
  }
  return res;
});
const filter = curry((f, iter) => {

  let res = [];
  for(const a of iter) {
    if(f(a)) res.push(a);
  }
  return res;
});
const reduce = curry((f, acc, iter) => {
  if(!iter) { // 두번째 인자로 초깃값이 없다면 iter의 첫번째 값을 초기값으로
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for(const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});
const go = (...args) => reduce((a, f) => f(a), args);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

module.exports = {
  curry,
  map,
  filter,
  reduce,
  go,
  pipe,
}