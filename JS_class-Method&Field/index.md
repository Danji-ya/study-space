### 클래스 메서드 vs 클래스 필드


Core 역할을 하는 컴포넌트가 있고 해당 컴포넌트를 extends 하여 메서드를 재정의하는 자식 컴포넌트가 있다. 여기서 Core 컴포넌트에서 메서드를 호출하게 되면 재정의한 자식의 메서드를 호출하는 것이 아닌 자신의 메서드를 호출하는 문제가 있었다. 

예를 들면 다음과 같은 클래스가 있을 때 당연히 `'I am B'` 콘솔이 찍힐줄 알았는데 `'I am A'`가 찍히게 된다.


```js
class A {
  constructor() {
    this.doSomething();
  }

  doSomething = () => {
    console.log('I am A');
  }
}

class B extends A {
  doSomething = () => {
    console.log('I am B');
  }
}

const b = new B();
```


그런데 아래와 같이 **클래스 필드가 아닌 클래스 메서드방식**으로 변경하면 생각했던대로 `'I am B'`가 잘 출력되는 것을 볼 수 있다.


```js
class A {
  constructor() {
    this.doSomething();
  }

  doSomething() {
    console.log('I am A');
  }
}

class B extends A {
  doSomething () {
    console.log('I am B');
  }
}

const b = new B();
```
### 이유가 뭘까... (나의 추측)

method의 경우 prototype에 함수를 지정하는 반면
field의 경우 인스턴스가 생성될 때마다 함수를 새로 생성하여 필드에 할당하는 것을 볼 수 있다.
> A라는 클래스로 100개의 인스턴스를 만들게되면 100개의 인스턴스 내부에 서로 다른 doSomething 함수가 중복으로 생성된다는 의미

```js
class A {
  constructor() {
    this.doSomething();
  }

  doSomething = () => {
    console.log('I am A');
  }

  dodo() {
    console.log('I am A');
  }
}
```



![](https://velog.velcdn.com/images/jiseong/post/bc543021-b6a3-40f0-975d-0b190c8d6262/image.png)


다시 돌아와서 문제가 있었던 A, B 클래스의 코드를 다시보자면
클래스 B는 클래스 A를 extends하고 있기 때문에 class A가 초기화되고 constructor 함수가 실행된다. 
그 다음 클래스 B가 초기화되고 constructor 함수가 실행되는 순서이다.


그렇다면 class A가 초기화되고 constructor 함수가 실행되는 과정에서 `this.doSomething();`가 호출이 되는데 여기서 **메서드 방식으로 작성을 하였다면 prototype으로 가지고 있기 때문에 정상적으로 오버라이딩 된 메서드를 불러올 수 있지만 필드 방식으로 작성 하였다면 아직 B가 생성되기 전이기 때문에 A의 필드 방식으로 작성된 메서드를 불러오지 않을까라는 추측**이 있다.





#### 가장 처음에 했던 추측
~~클래스의 실행순서부터 보자면 `const b = new B();` 생성자 함수로 b를 생성하고나면 클래스 B가 생성되고 클래스 B는 클래스 A를 extends하고 있기 때문에 class A가 초기화되고 constructor 함수가 실행된다.~~ 
~~그 다음 클래스 B가 초기화되고 constructor 함수가 실행되는 순서이다.~~

~~그렇다면 class A가 초기화되고 constructor 함수가 실행되는 과정에서 `this.doSomething();`가 호출이 되는데 여기서 선언과 할당의 차이가 있기 때문에 원했던 결과가 나오지 않았을까라는 추측이 든다.~~


~~왜냐하면 실행 컨텍스트를 생성하는 과정에서 코드를 실제로 실행하기전에 이미 선언문들을 기록했기 때문에 선언문의 경우에는 정상적으로 출력될 수 있었던 이유가 아닐까 생각된다.~~



### 추가 문제
```js
class Parent {
  // class field
  work = function() {
    console.log('This is work() on the Parent class');
  }
}

class Child extends Parent {
  // this goes on Child.prototype not on the instance of Child
  work() {
    console.log("This is work() on the Child class ");
  }
}

const kid = new Child();
```
위와 같이 작성되어 있는 클래스가 있고 여기서 `kid.work()`를 호출하면?

정답: `This is work() on the Parent class`

이유: 이미 인스턴스가 생성되었고 먼저 메서드를 찾기 위해 가장 가까운 kid의 property를 참조한다. 근데 부모를 참조하는 자식이기 때문에 부모의 work가 필드로 쓰여 kid 객체의 프로퍼티 work에 지정된다. 그래서 여기서 메서드를 찾기 때문에 부모에서 정의된 값이 호출 
( 만약 부모의 work가 메서드 방식으로 작성되었다면 인스턴스에 함수가 없기 때문에 원했던 Child class가 호출됨 )

![](https://velog.velcdn.com/images/jiseong/post/111d76e0-f7e7-4374-b2af-e477ab4475d7/image.png)

참조하는 순서는 다음과 같다.
1. own properties, directly under kid object
2. Child.prototype.work
3. Parent.prototype.work
4. If still not found, it will be looked inside Object.prototype

```js
// true 
console.log( kid.hasOwnProperty("work") )

// true
console.log( Child.prototype.hasOwnProperty("work") )

// false 
// because work inside Parent is added to each instance
console.log( Parent.prototype.hasOwnProperty("work") )
```

---

## Reference

- https://stackoverflow.com/questions/62301353/inheritance-and-polymorphism-using-arrow-functions-in-javascript-classes