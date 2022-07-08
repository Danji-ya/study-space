const { go, L, take, reduce } = require("./utils");

go([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
  L.map(a => a + 10),
  take(2),
  console.log
);

go([1, 2, 3],
  L.map(a => Promise.resolve(a + 10)),
  take(2),
  console.log
);

// ---------- kleisli composition ----------

go([1, 2, 3],
  L.map(a => Promise.resolve(a + 10)),
  L.filter(a => a % 2),
  take(2),
  console.log
);


// -------- reduce에서 nop 지원 --------

go([1, 2, 3],
  L.map(a => Promise.resolve(a + 10)),
  L.filter(a => a % 2),
  reduce((a, b) => a + b),
  console.log
);

// ------- 지연평가 + Promise의 효율성 --------

// 비동기적인 자체가 걸리지 않기 때문에 take의 수가 줄어들수록 효율적인 코드가 될 수 있다.
go([1, 2, 3, 4, 5, 6, 7, 8],
  L.map(a => new Promise(resolve => setTimeout(() => resolve(a * a), 1000))),
  L.filter(a => a % 2),
  take(2),
  console.log
);