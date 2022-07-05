const { go, range, map, filter, take, L } = require("./utils");

// 즉시평가를 이용한 예시
go(range(10), // [0, 1, 2, 3, ...9]
  map(n => n + 10), // [10, 11, 12, 13, ...19]
  filter(n => n % 2), // [11, 13, 15, 17, 19]
  take(2), // [11, 13]
  console.log);

// 지연평가를 이용한 예시
go(L.range(10),          // 0  1  2  3
  L.map(n => n + 10),    // 10 11 12 13
  L.filter(n => n % 2),  //    11    13
  take(2),               //    11    13 종료 (위에서 아래로 흐름)
  console.log);

// 순서가 take를 먼저 실행 후
// take 내부에서 next()를 호출, 평가하려고 할 떄
// 평가하기를 미뤄둔 iterator를 다시 평가하려고 하기 때문에
// filter 내부로 들어감
// 이를 반복하여 거슬러 올라가 range부터 시작
// breakpoint 활용하여 확인해보면 좋다.