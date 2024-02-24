// 함수를 변수에 담을 수 있다.
// 함수를 값으로 다룰 수 있다.
const add5 = a => a + 5;

// 함수의 인자로 사용될 수 있다
// 함수의 결과로 사용될 수 있다.
console.log(add5(5));

// 
const f1 = () => () => 1;

console.log(f1());

const f2 = f1();

console.log(f2);


// 함수를 인자로 받아서 실행하는 예시
const apply1 = f => f(1);

const add2 = a => a + 2;
console.log(apply1(add2));


const times = (f, n) => {
  let i = 0;

  while(i < n) {
    f(i++);
  }
}

times(console.log, 3);


// 함수를 반환하는 함수

const addMaker = a => b => a + b; // 커링??

const add10 = addMaker(10);
console.log(add10);