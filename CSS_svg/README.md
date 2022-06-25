최근에 SVG와 관련된 오류를 수정하면서 SVG에 대해서 잘 알고 있지 못한다고 생각하여 오늘은 SVG에 대해 알아보게 되었다.

일반적으로 사용하는 SVG와 PNG 모두 이미지를 저장하는 일종의 이미지 형식이다. SVG는 다음과 같은 장점과 단점을 지닌다.



### 반응형 레이아웃

SVG는 반응형 레이아웃에서 특히 유용하게 사용할 수 있다. 다음과 같이 twitter 로고에 대해 svg, png 형식을 가지고 있을 때, 확대를 하다보면 png 형식은 깨지게 된다.


![](https://velog.velcdn.com/images/jiseong/post/ef296ddb-27fe-409e-9f48-32fefed56556/image.png)

그 이유로는 **PNG는 비트맵 형식으로 서로 다른 점(픽셀)들의 조합으로 이미지를 표현**하기 때문에 크기를 늘리거나 줄이면 이미지에 손상이 가고 이를 깨졌다라는 의미로 표현한다.

반면에 **SVG는 벡터 기반이미지 형식으로 선, 점, 도형, 알고리즘의 복잡한 수학적 조합으로 만든 벡터 기반의 파일 포맷**이기 때문에 크기를 변경하여도 이미지가 손상되지 않는다.

![](https://velog.velcdn.com/images/jiseong/post/c3fed7f4-3daa-4004-b8c2-e30d1bd5f513/image.png)



### CSS, Javascript로 동적인 디자인 수정이 가능

SVG는 결국 마크업 언어로 표현될 수 있어  css 또는 javascript로 수정이 가능하다.

SVG파일을 코드로 직접 변경할 수 있기때문에 디자이너에게 이미지를 수정해달라는 요청이 필요없어지게 된다.

![](https://velog.velcdn.com/images/jiseong/post/d3f01916-bb74-4417-b536-11ff9a215639/image.gif)





### 이미지 로드

브라우저에서 이미지를 로드하기 위해 이미지가 존재하는 서버에 HTTP요청을 해야한다. 브라우저에서 사용하고 있는 이미지가 많을 수록 더 많은 HTTP 요청이 이루어져 로딩 속도가 느려질 상황이 발생할 수도 있는데 **SVG는 크기도 작을뿐더러 HTML 코드 상에 포함되는 마크업 언어이기 때문에 따로 요청할 필요가 없어 로드되는 속도가 빠르다**.




```html
<!DOCTYPE html>
<html>
<body>
  <h1>My first SVG</h1>
  <svg width="100" height="100">
     <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
     Sorry, your browser does not support inline SVG.
  </svg> 
</body>
</html>
```




### 단점

그럼에도 항상 단점이 존재하는데 결국 복잡한 수학적 조합으로 이루어져 있기 때문에 **SVG가 복잡해지고 크기가 커질수록 속도 저하를 일으키기 때문에 로고 또는 단순화된 이미지에 활용**하는 것을 추천한다.


---

### SVG 속성

#### svg viewport

뷰포트의 너비와 높이를 설정하는 방법은 `<img>` 요소와 동일하다.

```html
<svg width="200" height="200">
  ...
</svg>
```



#### viewBox
SVG 코드가 화면에 렌더링되면서 레이아웃 되는 영역에 알기 위해서는 viewBox 속성에 주목할 필요가 있다.

사용자 공간에서 SVG 뷰포트의 위치와 크기를 정의하는 속성으로
min-x, min-y, width, height 4개의 숫자목록으로 정의한다.

![](https://velog.velcdn.com/images/jiseong/post/22c3b86f-633f-4c52-b32d-5c63d2d1c7d6/image.png)


- min-x, min-y: **svg가 그려지는 영역의 시작점**, 왼쪽 위를 기준으로 한 viewBox의 좌표
- width, height: **시작점으로 부터 가로, 세로 사이즈**


간단하게 생각해보자.
다음과 같이 가로,세로 200인 박스 내부에 svg가 그려지는 영역의 **시작점을 0,0으로 하고 가로 세로 사이즈를 200**으로 한다면 다음과 같은 그림이 나온다.

> circle 요소의 중심 좌표 속성 cx와 cy가 설정되지 않아 cx="0", cy="0"이 적용된 상태이면서, 반지름 r=100의 circle 요소가 만들어져 있기 때문에 아래의 그림과 같이 원의 4사분면만이 보이게 된 것이다.

```html
<body>
  <div style="
      width: 200px; 
      height: 200px;
      border: 2px solid blue;
  ">
    <svg width="200" height="200" viewBox="0 0 200 200">
      <circle r="100" fill="green" />
    </svg>
</div>
```

![](https://velog.velcdn.com/images/jiseong/post/2b69378d-2b41-47fd-b55c-07d68cce3f11/image.png)

**만약 여기서 온전한 원을 보고 싶다면** 시작점의 좌표만 옮겨주면 된다. **원의 반지름이 svg의 viewBox 기준으로 절반을 차지하기 때문에 절반만큼만 -절반값, - 절반값의 시작점으로 위치**해주면 된다. 즉, -200/2, -200/2 으로 이동시켜주면 다음과 같이 정중앙에 위치하는 원을 볼 수 있게 된다. 

`viewBox="-100 -100 200 200"`

![](https://velog.velcdn.com/images/jiseong/post/22cb6116-399f-46aa-9855-f2ecb4886926/image.png)

> 여기서 가장 중요한 점은 다음과 같은 코드가 있을 때,
>```html
><svg width="200" height="200" viewBox="0 0 100 100">
>```
>SVG 캔버스 전체 크기는 200x200 **픽셀** 이지만 viewBox속성을 사용하여 (0,0)>에서 시작하는 **100x100px의 화면을 200x200px의 화면에 출력하기 때문에 >viewBox에 사용되는 width, height 속성을 픽셀로 생각하면 안된다.**










----

## Reference

- https://modomodoagency.com/2019/01/22/jpg-vs-png-vs-gif-vs-svg-image-format-guide/

- https://www.linkedin.com/business/learning/blog/productivity-tips/5-reasons-svg-is-the-web-designer-s-new-best-friend

- https://www.w3schools.com/graphics/svg_intro.asp

- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox