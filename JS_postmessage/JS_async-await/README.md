이전 두 개의 포스팅을 통해서 기존에 JS로 어떻게 비동기 처리 코드를 작성해왔고 Promise를 사용하게 된 이유에 대해서 살펴보았다. 이번 포스팅에서는 좀 더 개선된 방식으로 비동기 처리를 할 수 있도록 해주는 async/await에 대해서 알아보려고 한다.

[callback 그리고 Promise를 사용하는 이유1](https://velog.io/@jiseong/JS-callback-%EA%B7%B8%EB%A6%AC%EA%B3%A0-Promise%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0)

[callback 그리고 Promise를 사용하는 이유2](https://velog.io/@jiseong/JS-callback-%EA%B7%B8%EB%A6%AC%EA%B3%A0-Promise%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A02)

## promise의 아쉬운점

아래의 코드는 프로미스와 async/await를 사용하여 postId값으로 유저의 이름을 얻어내는 코드로 async/await에 비해 **프로미스를 사용하면서 느꼈던 아쉬웠던 점**은 다음과 같았다.

```js
// 프로미스를 사용한 예시
function getUserNameFromPostId(postId) {
  return fetch(`${prefixURL}/posts/${postId}`)
    .then(jsonToJsObject)
    .then((post) => post.userId)
    .then((userId) => {
      return fetch(`${prefixURL}/users/${userId}`)
        .then(jsonToJsObject)
        .then((user) => user.name);
    });
}

getUserNameFromPostId(1)
  .then((name) => console.log("name:", name))
  .catch((err) => {
    console.log(err);
    // ReferenceError: usor is not defined
    //       at index.js:13:30
  });

// async/await를 사용한 예시
async function getUserNameFromPostId2(postId) {
  const postRes = await fetch(`${prefixURL}/posts/${postId}`);
  const post = await jsonToJsObject(postRes);
  const { userId } = post;
  const userRes = await fetch(`${prefixURL}/users/${userId}`);
  const user = await jsonToJsObject(userRes);
  return user.name;
}

getUserNameFromPostId2(1)
  .then((name) => console.log("name:", name))
  .catch((err) => {
    console.log(err);
    // ReferenceError: usor is not defined
    //    at getUserNameFromPostId2 (index.js:32:3)
  });
```

### 디버깅이 아쉽다.

promise 체인에서 반환되는 error stack은 어디서 에러가 발생했는 지에 관해 어떤 힌트도 주지 않는다. 반면 async/await에서 발생한 error stack은 error를 포함한 함수를 알려준다.

![](https://velog.velcdn.com/images/jiseong/post/3a397574-1a29-4afb-8359-34944bb5eea8/image.png)

또한 break point를 사용하여 디버깅을 해봐도 then()이 차례대로 추적되지 않았다.

![](https://velog.velcdn.com/images/jiseong/post/218ee05b-9b5e-46e0-8003-8a5369241290/image.png)

### 가독성

프로미스와 비교하면 async/await를 사용함으로써 nesting도 피할 수 있고 보다 간결하게 작성할 수 있어 가독성이 좋게 코드를 작성할 수 있었다.

## Async/Await

async/await는 위에서 존재했던 아쉬웠던점(문제점)을 해결하기 위해 ES7에서 추가된 새로운 키워드로 async/await는 비동기 처리 코드를 동기 처리 코드와 유사하게 만들어준다. 이것이 async/await의 가장 큰 장점이다.

### async 함수

function 앞에 async를 붙이면 **해당 함수는 항상 프로미스를 반환**하며 아래와 같이 프로미스가 아닌 것은 프로미스로 감싸 반환하는 특징이 있다.

```js
async function f() {
  return 1;
}

f().then(alert); // 1

// 위의 결과와 동일한 명시적 프로미스 반환
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

### await

**자바스크립트가 await 키워드를 만나면 프로미스가 처리될 때까지 기다리며** Promise의 then과 같다고 할 수 있는데 보다 가독성 좋고 쓰기 쉽게 만들어주는 키워드이다.

```js
async function f() {
  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
```

## 마치며

async/await가 나은점이 많아 무조건 async/await을 쓰면 좋을 것 같지만 여러 개의 비동기 처리를 병렬로 처리하기 위해서는 여전히 Promise.all()를 사용해야하기 때문에 상황에 따라 적절한 비동기 처리 방식을 활용하면 좋을 것 같다.

---

## Reference

- https://javascript.info/async-await

- https://www.daleseo.com/js-async-async-await/
