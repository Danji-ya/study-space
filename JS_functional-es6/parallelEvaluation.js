const { go, L, reduce, curry, take, pipe, map, filter } = require("./utils");

function test(name, f) {
  console.time(name);
  f.then(_ => console.timeEnd(name));
}


const delay1000 = a => new Promise(resolve => {
  setTimeout(() => resolve(a), 1000);
});

// test('sequential reduce',
//   go([1,2,3,4,5],
//     L.map(a => delay1000(a*a)),
//     L.filter(a => a % 2),
//     reduce((a, b) => a + b),
//     console.log)
// );

const C = {};


// 모든 함수를 실행해놓고
// 개별적으로 비동기제어하여 앞에서부터 누적
C.reduce = curry((f, acc, iter) => iter ?
  reduce(f, acc, [...iter]) :
  reduce(f, [...acc]));

// test('parallel reduce',
// go([1,2,3,4,5],
//   L.map(a => delay1000(a*a)),
//   L.filter(a => a % 2),
//   C.reduce((a, b) => a + b),
//   console.log)
// )


// ---------- 연속중인 딜레이 ---------------
// go([1,2,3,4,5],
//   L.map(a => delay1000(a * a)),
//   L.filter(a =>delay1000(a % 2)),
//   L.map(a => delay1000(a + 1)),
//   C.reduce((a, b) => a + b),
//   console.log);


// reject가 일어나기 전에 catch가 미리 달려있다면 에러 캐치가 되는데 지금은 이미 c.reduce에서 reject되어서 
// 불필요한 로그가 발생

function noop() {}
const catchNoop = ([...arr]) => 
  (arr.forEach(a => a instanceof Promise ? a.catch(noop) : a), arr);

C.reduce = curry((f, acc, iter) => iter ? 
  reduce(f, acc, catchNoop(iter)) :
  reduce(f, catchNoop(acc))
);

// test('parallel reduce',
//   go([1,2,3,4,5],
//     L.map(a => delay1000(a * a)),
//     L.filter(a =>delay1000(a % 2)),
//     L.map(a => delay1000(a + 1)),
//     C.reduce((a, b) => a + b),
//     console.log)
// );


C.take = curry((l, iter) => take(l, catchNoop(iter)));

// test('sequential take',
//   go([1,2,3,4,5],
//     L.map(a => delay1000(a * a)),
//     L.filter(a =>delay1000(a % 2)),
//     L.map(a => delay1000(a + 1)),
//     take(2),
//     console.log)
// );

// test('parallel take',
//   go([1,2,3,4,5],
//     L.map(a => delay1000(a * a)),
//     L.filter(a =>delay1000(a % 2)),
//     L.map(a => delay1000(a + 1)),
//     C.take(2),
//     console.log)
// );

// ----------- 즉시 병렬적으로 평가하기 -------------
// 특정 라인에서만 병렬적으로 실행하고
// 그 이후에는 다시 동기적으로 하는 방식

C.takeAll = C.take(Infinity);
C.map = curry(pipe(L.map, C.takeAll));
C.filter = curry(pipe(L.filter, C.takeAll));

const delay300 = (a, name) => new Promise(resolve => {
  console.log(`${name}: ${a}`);
  setTimeout(() => resolve(a), 300);
});


// C.map(a => delay300(a * a, 'CMap'), [1, 2, 3, 4]).then(console.log);
// C.filter(a => delay300(a % 2, 'CFilter'), [1, 2, 3, 4]).then(console.log);


// -------- 상황에 따라 맞는 평가 전략 --------

test('strategy',
  go([1, 2, 3, 4, 5, 6, 7, 8],
  L.map(a => delay300(a * a, 'map 1')),
  L.filter(a => delay300(a % 2, 'filter')),
  L.map(a => delay300(a + 1, 'map 2')),
  reduce((a, b) => a + b),
  console.log)
);