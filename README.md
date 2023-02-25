# 💻 Webpack

- 해당 저장소는 Webpack과 관련되어 새롭게 알게 된 내용을 정리하는 저장소입니다.

<br />

## 💎 주요 컨셉 및 가이드 목차

1. [css-loader](#📃-css-loader)

<br />

## 📃 CSS-loader

### 문제 발생

- css modules 사용을 위해 css-loader 옵션 modules 값을 true 로 설정하였다. CSS 모듈(*.module.scss) 파일에 적용하기 위한 새로운 규칙을 추가

- 하지만 아래와 같이 개발단계에서도 class names이 난독화되어 불편한 상황이 발생

```html
<div class="fqoNvYgr578KdSpeQ6itl">
  생략...
</div>
```

<br />

### 옵션

`localIdentName`

Default: '[hash:base64]'

css modules가 고유한 네이밍을 가질 수 있도록하는 옵션으로 기본값이 'hash:base64'이였기 떄문에 개발단계에서도 난독화가 되어있었던 것이였다.

위의 옵션을 수정함으로써 개발단계에서는 클래스명 보기가 어렵던 문제가 해결되었다.

```js
localIdentName: '[local]--[hash:base64:8]',
```

<br />

`importLoaders`

Default: 0

문서상에서는 다음과 같이 설명하는데 무슨소리인지 이해가 가질 않아 정리하였다.

```
Allows to enables/disables or setups number of loaders applied before CSS loader for @import at-rules, CSS modules and ICSS imports, i.e. @import/composes/@value value from './values.css'/etc.
```

다음과 같이 css에 대해서 웹팩 설정이 되어있다고 가정해보자.

일부 브라우저에서 적용되지 않는 css 속성의 앞에 -ms-, -webkit- 등의 접두사등을 자동으로 붙여줄 수 있도록 autoprefixer를 추가한 상황이다. 

```js
  test: /\.css$/,
  use: [
    'style-loader', 
    'css-loader', 
    { loader: 'postcss-loader',
      options: {
        plugins() {
          return [autoprefixer()];
        },
      },
    }
  ]
```

만약 여기서 아래의 흐름으로 css를 import하는 상황이라면,

```js
// index.js
import './test1.css';

// test1.css
@import './test2.css'
.this-is-for-test1 {
  display: flex;
}

// test2.css
.this-is-for-test2 {
  display: flex;
}
```

아무 옵션을 주지 않는 경우라면 결과는 다음과 같을 것이다.
```js
.this-is-for-test1 {display:flex}
.this-is-for-test2 {display:-webkit-flex;display:-ms-flexbox;display:flex}
```

하지만 importLoaders를 1로 설정하였다면 우리가 생각했던 결과가 도출될 것이다.
```js
.this-is-for-test1 {display:-webkit-flex;display:-ms-flexbox;display:flex}
.this-is-for-test2 {display:-webkit-flex;display:-ms-flexbox;display:flex}
```

이처럼 importLoaders 옵션의 역할은

현재 로더에 의해 처리되는 파일에 @import, composes절이 있을 때 현재 로더 이전에 선언된 로더 수만큼 먼저 적용하도록 허용하는 옵션이다. 

css-loader 이전에 선언된 postcss-loader가 1단계 이전에 있었기 때문에 importLoaders를 1로 설정함으로서 test1.css에서 마주한 @import문의 스타일시트도 autoprefixer가 적용된 것이다.

<br />
