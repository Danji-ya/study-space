웹용 [Google Sign-In Javascript Platform Library](https://developers.google.com/identity/sign-in/web/sign-in)가 중단될 예정이라 새로운 웹용 Google ID 서비스 SDK를 사용해야 한다고한다.

그래서 서비스를 개선하면서 이참에 변경하기로 했다.

## 새롭게 추가된 것

### 개인화된 로그인 버튼

구글 세션에 로그인된 기록이 존재하면 사용자의 개인화에 맞는 버튼을 보여준다. (기존에는 그냥 구글로 로그인과 같은 텍스트 문구)

![](https://velog.velcdn.com/images/jiseong/post/198aeccb-f814-45ce-95b5-74c96369e323/image.png)


### One tap

말그대로 한번의 클릭으로 신규 사용자를 등록 또는 로그인 할 수 있는 기능이다.

![](https://velog.velcdn.com/images/jiseong/post/22609f9e-b77c-4294-8a52-93e140e8e38a/image.png)


하지만 나에게는 새롭게 추가된 기능은 필요없었기때문에 기존처럼 사용하려고 한다.

## 사용방식

### 클라이언트 라이브러리를 로드
```html
<head>
  <!-- 생략... -->
  <script src="https://accounts.google.com/gsi/client" async defer></script>
  <title>pro-pro</title>
</head>
```

### google.accounts.id.initialize

google.accounts.id.initialize 메서드를 사용하여 구글 로그인을 initialize한다. 

**client_id 필드**:  구글 OAuth 클라이언트 ID를 지정

**callback 필드**: 로그인이 성공하면 JWT를 반환하는데 이때의 핸들러로 지정해줄 함수를 등록

그 밖에 더 다양한 필드가 존재하는데 [IdConfiguration](https://developers.google.com/identity/gsi/web/reference/js-reference#IdConfiguration)를 참조하면 좋다.


```
<script>
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
      callback: handleCredentialResponse
    });
    // google.accounts.id.prompt();
    // One Tap 기능을 사용하지 않기 때문에 주석처리하였다.
  };
</script>
```

### google.accounts.id.renderButton

google.accounts.id.renderButton 메서드를 사용하여 브라우저에 구글 로그인 버튼을 렌더링하면 되는데 **아직 기존처럼 커스텀화된 버튼에 대한 이벤트 핸들러 부착이 안되기 때문에 제공해준 기능만을 사용하여 커스텀화** 해야하는 것 같다.


**첫번째 매개변수**로 지정된 요소에 버튼이 렌더링 되며 **두번째 매개변수**로 버튼을 커스텀화 할 수 있다.

마찬가지로 [문서](https://developers.google.com/identity/gsi/web/reference/js-reference#GsiButtonConfiguration)에서 버튼 커스텀 옵션에 따라 시각적으로 예시를 보여주고 있어 참조하면 좋다.

```html
<script>
  window.onload = function () {
	// 생략...
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
  }
</script>
<div id="buttonDiv"></div> 
```


## 최종 예시코드

```html
<html>
  <body>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <script>
        function handleCredentialResponse(response) {
          console.log("Encoded JWT ID token: " + response.credential);
        }
        window.onload = function () {
          google.accounts.id.initialize({
            client_id: "YOUR_GOOGLE_CLIENT_ID",
            callback: handleCredentialResponse
          });
          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" }
          );
          google.accounts.id.prompt();
        }
    </script>
    <div id="buttonDiv"></div> 
  </body>
</html>
```
기존의 구글 로그인 라이브러리와 다르게 버튼을 내 입맛에 맞게 자유롭게 꾸미는 것에 제한이 있어서 아쉽다...

만약 **사용자 맞춤형 버튼처럼 보이기 싫고 기존처럼 버튼에 텍스트만 보이고 싶다면** 버튼을 커스텀할 수 있는 옵션에서 type: icon 또는 size: medium or small 또는 width: 200px 아래로 설정하면 된다. 




---

## Reference

- https://developers.google.com/identity/gsi/web/reference/js-reference