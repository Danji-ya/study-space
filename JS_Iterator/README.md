자바스크립트의 레퍼런스를 살펴보면 Iterable 혹은 Iterator라는 단어가 자주 언급이 된다. 그동안은 대충 반복이 가능한 것? 정도로만 알고 있었는데 최근에 Map, Set등을 공부할 때도 언급이 되면서 공부해보면 괜찮을 주제인 것 같아 이번 기회에 Iterable 과 Iterator에 대해 정리해보았다.


### Iterable

자바스크립트에 iterable는 객체로 **반복 가능한 객체**를 의미한다. 대표적인 예가 Array, String이다. 그뿐만 아니라 ES6에 추가된 Map과 Set 또한 Iterable로 평가된다.

그렇다면 **Iterable로 평가되기 위해서는 무엇이 필요**한지가 궁금했다.

다음과 같이 Iterable로 평가되는 Map이나 Array등의 속성을 확인해보면 조금 특별한 속성이 존재한다.

![](https://velog.velcdn.com/images/jiseong/post/fcf456fc-2ee7-4e8c-94f4-7e4218ce4307/image.png)


바로 **Symbol.iterator 속성**으로 Iterable하기 위해서는 그 객체(또는 프로토타입 체인의 객체 중 하나)는 **@@iterator 메서드가 정의**되어 있어야 하며 **메서드의 값**은 **Iterator인 객체를 반환하는, arguments 없는 함수**여야 한다.

이렇게 객체의 Symbol.iterator 속성이 정의되어 있고 Iterator인 객체를 반환한다면 이를 반복 가능한 객체 혹은 줄여서 iterable이라 말할 수 있고, 해당 객체는 iterable protocol을 만족한다고 말한다. 그리고 iterable로 평가된 값은 ES6에서 추가된 다양한 기능들을 사용할 수 있다.

for...of 루프
spread 연산자 (...)
destructuring assignment

> 평소에 객체의 속성값을 순회하기 위해서 Object.entries, Object.keys등을 사용하는데 이 메서드들은 배열로 반환되기 때문에 for...of 루프를 사용할 수 있었던 것이다.


그렇다면 여기서 또, Iterator인 객체를 알아야 한다.
### Iterator

Iterator는 특별한 조건을 만족하는 객체로 **객체가 아래의 규칙을 따르는 두가지 속성을 가진 객체를 반환하는 next() 메서드를 가지고 있다**면 Iterator이라 말할 수 있고, 해당 객체는 iterator protocol을 만족한다고 말한다.

두 가지 속성은 done과 value로 next()는 객체로 {done: Boolean, value: any}와 같은 형태를 반환한다. 
- done=false일땐 작업이 남아있다는 의미이며 value에 다음 값이 저장된다.
- done=true는 반복이 종료되었음을 의미하며 이 경우에는 value값이 생략될 수 있다.


> 만약 Iterable의 @@iterator 메소드가 iterator 객체를 반환하지 않는다면 그것은 잘 정의되지 못한 iterable이라고 할 수 있다. 이러한 iterable을 사용하는 것은 런타임 예외나 예상치 못한 결과를 불러올 수 있다.
-MDN-



### 직접 iterable인 객체 만들기

그렇다면 우리가 직접 iterable인 객체를 만들 수 없을까라는 궁금증이 생길 수도 있다. 결론부터 말하면, iterable protocol을 만족할수만 있다면 어떤 객체든 iterable인 객체가 될 수 있다.

다시 iterable protocol의 조건을 생각해보며 일반적인 객체를 iterable인 객체로 만들어보자.

```js
const countObj = {
  from: 1,
  to: 5,
}
```

- Symbol.iterator 속성이 정의되어 있어야 한다.
- Symbol.iterator 속성의 값은 next()메서드(또, next()메서드는 Iterator Protocol을 준수해야한다.)를 가지는 Iterator인 객체를 반환해야 한다.


```js
Object.defineProperty(countObj, Symbol.iterator, {
  value: function() {
    let {from, to} = this;

    return {
      next: function() {
        if(from <= to) return iteratorProtocol(false, from++);
        else return iteratorProtocol(true);
      },
      [Symbol.iterator]() {return this}
    }
  }
})

function iteratorProtocol(done, value) {
  if(!value) return { done: true };

  return {
    done: false,
    value
  }
}
```

그 결과 일반 객체에서는 사용하지 못하는 ES6기능들을 사용할 수 있다.

![](https://velog.velcdn.com/images/jiseong/post/e42a7aca-6762-41dd-bde2-d6ed8915ee0a/image.png)


### 마무리
이번 내용을 정리하면서 객체를 순회할 때 왜 Object.keys()등을 써야하는지 객체와 유사하다고 생각했던 Map은 왜 for...of 루프를 사용할 수 있었는지에 대해서 알 수 있게 되었다. 그리고 Iterable과 Iterator의 차이에 대해서도 알 수 있는 시간이였다.




---

## Reference

-  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols