function *gen() {
  yield 1;
  yield 2;
  yield 3;
}

// 제네레이터 함수를 통해 쉽게 iterable 한 값을 만들 수 있다.
const iter = gen();
// log(iter.next());
// log(iter.next());
// log(iter.next());
// log(iter.next());

// 어떠한 값이든 반복 가능한 iterable 한 값을 만들 수 있다.

// 홀수만 발생하는 예제


function *infinity(i=0) {
  while(true) yield i++;
}


function *limit(l, iter) {
  for(const a of iter) {
    yield a;
    if(a === l) return;
  }
}

function *odds(l) {
  for(const a of limit(l, infinity(1))) {
    if(a % 2) yield a;
  }
}


for(const a of odds(10)) console.log(a);


// 제네레이터를 잘 활용하면 조합성이 좋은 코드를 작성할 수 있다.

console.log(...odds(20));