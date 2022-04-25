## 정규표현식 생성
정규 표현식을 생성하는 방법에는 리터럴 표기법과 생성자, 2가지 방식이 있다.
```js
// 리터럴 방식
const regex = /abc/g;

// 생성자 방식
const regex = new RegExp("abc", 'g');
```


![](https://velog.velcdn.com/images/jiseong/post/f731ae0b-2ce6-486e-a56f-1518f28d4728/image.png)


**패턴**에는 검색하고 싶은 문자열을 지정하며 **플래그**를 선택적으로 사용하여 특정 대상을 지정할 수 있다.

>만약 플래그를 사용하지 않은 경우 문자열 내 매칭 대상이 여러개라도 첫번째 매칭한 대상만을 검색한다.

## 정규표현식 플래그

플래그에는 아래와 같은 종류가 있다.

g: 문자열 내의 모든 패턴을 검색
```js
const literalRegex = /abc/g;
const testStr1 = 'abc abc abc abc ABc';

console.log(testStr1.match(literalRegex));
// (4) ['abc', 'abc', 'abc', 'abc']
```

i: 대소문자를 구별하지 않고 검색
```js
const literalRegex = /abc/gi;
const testStr1 = 'abc abc abc abc ABc';

console.log(testStr1.match(literalRegex));
// (5) ['abc', 'abc', 'abc', 'abc', 'ABc']
```

m: 문자열의 행이 바뀌더라도 계속하여 검색
```js
const literalRegex = /^abc/gi;
const testStr1 = `abc 
abc 
abc 


abc 
ABc`; // Template Literal를 사용

console.log(testStr1.match(literalRegex));
// ['abc']


// m 플래그를 사용한다면
const literalRegex = /^abc/gim;
console.log(testStr1.match(literalRegex));
// (5) ['abc', 'abc', 'abc', 'abc', 'ABc']
```


> m 플래그는 앵커 ^ 또는 $의 작동방식에만 영향을 주기 때문에 같이 활용해서 테스트를 해보았다.
>
^: 문자열 또는 줄의 시작을 지정
>
$: 문자열 또는 줄의 끝을 지정

## 메타 문자
정규 표현식에서 사용하는 **메타 문자**에는 `. ^ $ * + ? { } [ ] \ | ( )`가 있다.
> 메타 문자 
원래 그 문자가 가진 뜻이 아닌 **특별한 용도로 사용하는 문자**

### 문자 클래스

그 중에서도 `문자클래스 [ ]`에 대해 알아보자면

#### [일반적인 문자열]
예를 들면  [aeiou] 패턴을 사용한다면 매칭되는 것은 a 또는 e 또는 i 또는 o 또는 u이다.([ ] 안에서는 or 연산자라고 생각하면 된다.)

```js
const regExp = /[aeiou]/;
```

![](https://velog.velcdn.com/images/jiseong/post/2f267dd9-f2ea-4888-b10b-63acbcbfe78f/image.png)



#### [0-9] === \d

숫자와 매치
```js
const regExp = /[0-9]/;
```


![](https://velog.velcdn.com/images/jiseong/post/737ed7ec-4358-44d3-8723-a772124243ee/image.png)



#### [ \t\n\r\f\v] (맨 앞의 빈 칸은 공백문자(space)) === \s

whitespace 문자와 매치
```js
const regExp = /[ \t\n\r\f\v]/;
```




![](https://velog.velcdn.com/images/jiseong/post/e3c20daf-807d-463d-8530-6254e96f6a77/image.png)


#### [a-zA-Z0-9_] === \w

소문자(a to z), 대문자(A to Z) 숫자(alphanumeric)와 매치
```js
const regExp = /[a-zA-Z0-9_]/;
```


![](https://velog.velcdn.com/images/jiseong/post/0e6da832-2330-469b-b2fb-c889d80bd4e6/image.png)



#### [^0-9] === \D

숫자가 아닌 것과 매치
```js
const regExp = /[^0-9]/;
```


#### [^ \t\n\r\f\v] === \S

whitespace 문자가 아닌 것과 매치
```js
const regExp = /[^ \t\n\r\f\v]/;
```


#### [^a-zA-Z0-9_] === \W

소문자(a to z), 대문자(A to Z) 숫자(alphanumeric)가 아닌 문자와 매치

```js
const regExp = /[^a-zA-Z0-9_]/;
```



### 반복 패턴


#### {n}
n개 반복되는 문자와 매치

```js
const regExp = /\d{2}/g;
```

![](https://velog.velcdn.com/images/jiseong/post/7141f318-1052-45a5-b93d-410d0425b0d8/image.png)

### {Min, Max}

최소 Min개 이상, 최대 Max개 이하 문자와 매치

```js
const regExp = /\d{2,4}/g;
```

![](https://velog.velcdn.com/images/jiseong/post/3113cf67-1bb8-4589-9237-1a818d21a095/image.png)

### 유연한 수량자

#### ? 
없거나 or 최대 한개만

```js
const regExp = /sounds?/g;
// s가 옵셔널이라 생각하면 된다.
```

![](https://velog.velcdn.com/images/jiseong/post/c61074cc-9374-453a-a778-dbb0e336f74d/image.png)

#### +
최소 한개 or 여러개

```js
const regExp = /\d+/g;
```

![](https://velog.velcdn.com/images/jiseong/post/52b6a16b-3cc1-4253-9c1f-9f0d1f283ac4/image.png)


#### *
없거나 or 있거나 (여러개)

```js
const regExp = /ca*t/g;
```

![](https://velog.velcdn.com/images/jiseong/post/e0c1b441-674c-4c5d-aedc-77cbacf39349/image.png)


### 그룹  ()

```js
const regExp = /sounds?/g;
// s가 옵셔널이라 생각하면 된다.
```
와 같은 상황에서 sounds자체를 반복하고 싶을 때가 있을 것이다. 이럴 때 사용하는 것이 그룹으로 패턴()을 사용하면 된다.

```js
const regExp = /(sounds)+/;

const test = 'soundssounds';

console.log(test.match(regExp));
// (2) ['soundssounds', 'sounds']
```
예상했던 결과로는 ['soundssounds']가 나올거라 생각했다.
그런데 플래그 g를 사용하지 않았는데 2개의 결과가 나온 것을 볼 수 있다.

이는 **패턴 ()는 괄호 안에 있는 표현식을 캡처**하여 첫번째 요소로 일치하는 전체 내용 그리고 두번째 요소로 캡처된 내용(찾아낸 패턴)을 반환하기 때문이다.