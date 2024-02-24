이전 시간에 Itarator, Itarable 포스팅을 하고나서 직접 Symbol.iterator속성의 값을 구현하지 않고도 제너레이터 함수를 사용하면 Iterable인 객체를 만들 수 있다는 것을 알았다. 아직까지는 리덕스 미들웨어인 redux-saga를 사용하면서 써본 것 이외에는 다른 곳에서 직접 사용해본적이 없어 어렴풋이만 알고 있었기 때문에 이번 기회에 Genereator에 대해서 알아보게 되었다.


## Generator

Generator는 **제네레이터 함수에 의해 반환되며 이전 시간에 배운 Iterable Protocol과 Iterator Protocol을 준수하는 객체**이다.

그렇다면 next()메서드를 가지고 있을까란 궁금증이 있었는데 Generator 객체도 next()메서드를 가지고 있으며 그 이외에 return(), throw() 메서드도 가지고 있다.

> next(): 이후에 나올 yield 키워드에 의해 표현된 값을 반환하는 메서드
return(): 주어진 값을 반환하며 제네레이터를 종료하는 메서드
throw(): 제네레이터에 오류를 throw 하는 메서드


### Generator function

제네레이터 함수는 기존의 일반 함수와는 조금 특별하게 **함수의 실행이 일시적으로 중단하면서 요청별로 여러 값을 생성**한다는 점에서 특별한 유형의 함수이다.

제네레이터 함수는 `function*` 키워드를 사용하여 정의할 수 있고 함수 블록내에서 `yield`라는 조금 특별한 키워드를 사용하여 요청별로 값을 생성할 수 있게 한다.


하나의 예시로 동작을 살펴보자.


```ts
function* myGenerator() {
  yield '1';
  yield '2';
}
```

> Generator는 바로 인스턴스화를 할 수 없고 대신에, 제네레이터 함수에 의해 인스턴스화 될 수 있다.

![](https://velog.velcdn.com/images/jiseong/post/c9e62c6d-496f-4d83-81b6-a23d4c0042e7/image.png)

**myGenerator를 호출하면** 반환되는 값은 제네레이터 객체이며 이 **제네레이터는 일시 중단된 시작 상태**가 된다.
```js
var gen = myGenerator();
```


**이후에 첫번째 gen.next()가 호출이 되면 가장 가까운 yield 까지 실행 후에 yield 키워드 뒤에 존재하는 값을 반환**한다. 그리고 **다음 gen.next()가 호출될 때까지 다시 일시 중지**된다.

```js
const result1 = gen.next();
// result1 = {value: '1', done: false}
```

이 반복적인 동작은 **return 문에 도달하거나 더 이상 실행할 코드가 남지 않을 때까지 계속되며, 이 시점에서 제네레이터는 완료 상태**가 된다.

```js
const result2 = gen.next();
// result2 = {value: '2'; done: false}
const result3 = gen.next();
// result3 = {value: undefined, done: true}
```

![](https://velog.velcdn.com/images/jiseong/post/5e71d7e3-1073-4f52-bf7b-4eb2ffb43e34/image.png)


그리고 제네레이터가 종료된 시점에는 gen.next()를 여러번 호출하여도 객체 {value: undefined, done: true}가 반환될 뿐 어떠한 작업도 진행되지 않는다.


### Generator function을 활용한 Iterable인 객체 만들기

이전 포스팅에 비해 훨씬 더 간결하게 만들 수 있다.

```js
const countObj = {
  from: 1,
  to: 5,
}

Object.defineProperty(countObj, Symbol.iterator, {
  value: function* () {
    for(let value = this.from; value < this.to; value+=1){
      yield value;
    }
  }
})

console.log('for...of 루프');
for (let value of countObj){
  console.log(value);
  // 1
  // 2
  // 3
  // 4
}
```



---

## Reference

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator


- https://codeburst.io/generators-in-javascript-1a7f9f884439