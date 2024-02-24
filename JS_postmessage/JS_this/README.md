매주 목요일마다 면접을 준비하는 스터디가 있다. 저번 주에는 어떤 질문을 할지 고민하며 준비를 하다가 화살표 함수와 관련된 질문을 준비했는데 나 또한 잘 알지 못한다고 생각이 들어 이번 기회에 정리를 하게 되었다.

화살표 함수는 function 키워드 대신 화살표(=>)를 사용하여 보다 간략한 방법으로 함수를 선언하는 방식으로 몇가지 차이점이 있지만 그 중에서도 **function 키워드로 생성한 일반 함수와 화살표 함수의 가장 큰 차이점인 this에 대해서 알아보려고 한다**.



### 함수를 호출한 주체에 따라 정해지는 this


일반적으로 this의 값은 해당 **함수를 호출한 주체**가 누구냐에 따라 결정된다. 다음의 코드로 확인해보자.

```js
function func() {
  debugger;
  console.log('this:', this);
}

const obj = {
  methodA: func
}

function CreateFunc() {
  this.methodA = func;
}

func(); // 일반 함수 호출 (1)
obj.methodA() // **객체**의 메서드로서 호출 (2)
const myObj = new CreateFunc();
myObj.methodA(); // **인스턴스**의 메서드로서 호출 (3)
```

그림의 결과와 같이 일반 함수 호출방식은 전역 객체인 window를 가리키지만 객체의 메서드로서 호출된 함수는 호출의 주체인 obj를 가리키고 있는 것을 확인할 수 있었다.

![](https://velog.velcdn.com/images/jiseong/post/0b248b8a-7746-4d66-8eb0-aca56477233a/image.png)



물론 일반 객체의 메서드로서 호출할 수 있지만 재사용할 수 있는 객체 생성 코드를 구현하기 위해 사용하는 생성자 함수를 사용하여 또 다른 객체(인스턴스)를 만들 수도 있다.

그렇다면 생성자 함수에 의해 생성된 인스턴스의 메서드를 호출한 경우에는 어떤 값이 출력될지가 궁금할 것이다.

![](https://velog.velcdn.com/images/jiseong/post/5bb3db04-02c1-47a2-b405-804e69fa1b2e/image.png)

여기서의 this는 메소드나 함수 호출 때와는 다르게 동작하는 것을 볼수가 있는데 생성자 함수의 동작방식에서 새로 생성되는 객체가 있고 이 객체를 this가 가리키도록 하기 때문이다. 그리고 생성된 빈 객체는 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체 설정하기 때문에 아래의 그림과 같이 보여지는 것이다.

![](https://velog.velcdn.com/images/jiseong/post/60cc1186-e74d-4f0f-9a27-994f05c9f736/image.png)


여러가지 방법들을 확인해보니 이렇게 **각자 this값이 달라지는 현상은 함수를 호출한 주체에 따라 this에 바인딩할 객체가 동적으로 결정된다는 특징**이 있어서이다.


하지만 이러한 특징은 객체 지향 스타일로 프로그래밍할 때 별로 좋지 못한다. 그렇다면 **this를 정적으로 결정할 수 있는 방법은 없을까란 생각**이 들 것이다.
```js
function Person() {
  // Person() 생성자는 `this`를 자신의 인스턴스로 정의.
  this.age = 0;

  setInterval(function growUp() {
    this.age++;
  }, 1000);
}

var p = new Person()
```




방법은 물론 있다. **이때, 화살표 함수나 apply, call, bind와 같은 메서드를 사용하는 것**이다.

### 화살표 함수의 this

화살표 함수와 관련된 MDN 문서를 확인해보면 다음과 같은 문구가 있다.

> Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.

화살표 함수의 내부에는 this가 따로 바인딩되지 않는다는 내용인데 function 키워드로 생성한 일반 함수는 함수가 호출될 때 즉, 실행 컨텍스트가 생성될 때 this 값이 정해진다. 그런데 this가 따로 바인딩되지 않는다면 어떻게 this 값이 정해지는가 궁금했다. 이는 몇가지를 테스트 해보며 추측을 해본 결과 **화살표 함수의 경우에는 함수를 둘러싸는 렉시컬 스코프(lexical scope)의 this**로 정해지는걸로 이해할 수 있었다.

그 예시로는 다음의 코드를 사용하여 추측해보았다.

```js
const obj1 = {
  methodA: () => {
    console.log('화살표의 this', this);
  }
}

function CreateFunc1() {
  console.log('CreateFunc1의 this', this);
  this.methodA = () => {
    console.log('화살표의 this', this);
  };
}

obj1.methodA() // 객체의 메서드로서 호출
const myObj1 = new CreateFunc1();
myObj1.methodA();
```
코드를 실행해보면 obj1의 경우에는 window 객체를 가리키는 반면 myObj1의 경우에는 CreateFunc1객체를 가리키게 된다.

이렇게 나온 이유로는 obj1는 코드상으로 전역 실행 컨텍스트 내에 정의 되어있으며 자신만의 실행 컨텍스트를 가지고 있지않아 전역 실행 컨텍스트의 this인 전역 객체, window를 가리킨 것이다. 하지만 CreateFunc1()는 결국 함수로 함수가 호출될 때 자신만의 실행 컨텍스트가 존재하기 때문에 myObj1.methodA()가 호출될 시점에 반환되는 this는 methodA의 렉시컬 스코프의 this 즉, CreateFunc1의 this를 반환해주는 것이라고 이해했다.

![](https://velog.velcdn.com/images/jiseong/post/d16bf807-819c-4423-9155-4b59893d1adb/image.png)




--- 

## Reference

- https://poiemaweb.com/js-this

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions