function delay(a) {
  return new Promise(resolve => setTimeout(() => resolve(a), 500));
}

async function f1() {
  const a = await delay(10);
}

// async는 Promise 객체를 반환하는 함수
// 내부에서는 동기적으로 표현할 수 있다.
// 외부에서 그 값을 받아서 이어서 프로그래밍을 하는 식으로 한다면
// then과 같은 함수가 필요


const pa = Promise.resolve(10);

(async () => {
  console.log( await pa );
})();