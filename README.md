#Example Site
http://danjiya.lazyig.com/

공공데이터 API를 활용한 휴게소 음식리뷰 공유 사이트
---
## 1. 프로젝트 내용
#### 1.1 휴게소 별 메뉴 및 리뷰확인



       노선 목록 및 휴게소 목록은 리뷰 작성시에도 반복적으로 쓰이는 Component이기 때문에 이와 같이 재사용이 될 수 있는 Component들은
      나누어 재사용성을 높였다. 본론으로 돌아오자면 <그림-1>과 같이 해당하는 노선과 휴게소명을 선택하고 나면 휴게소의 음식 메뉴 목록
      들이 보여지고 음식을 선택하면 <그림-2>처럼 그 음식에 대한 detail과 작성된 리뷰를 볼 수가 있다. 공공데이터에서 제공되는 데이터
      에는 음식 이미지를 구할 수 없어 몇 개의 샘플 이미지만 가져다 놓은 상태이며 리뷰는 작성자, rating및 후기를 볼 수 있게 하였다. 

<p align="left">
<img src="https://user-images.githubusercontent.com/53927959/124693267-163a5f00-df1a-11eb-9e74-0123eb42194a.png" height="250" width="350"> <img src="https://user-images.githubusercontent.com/53927959/124693544-9b257880-df1a-11eb-88b6-38ccae8c8c61.png" height="250" width="350">


**<그림-1>** 　　　　　　　　　　　　　　　　　　__<그림-2>__
<p/>
  
#### 1.2 리뷰작성
  
       리뷰 작성은 <그림-3>와 같이 로그인이 필요한 서비스로 알림 후 로그인 화면으로 이동 후 로그인을 하게 되면 다시 리뷰 작성으로
      올 수있게 하였고 <그림-4>에서 리뷰 작성 시 rating은 클릭에 따라 동적으로 나타나게 하였고 모든 양식이 작성 되어있어야 리뷰를 
      저장할 수 있게 하였다.
<p align="left">
<img src="https://user-images.githubusercontent.com/53927959/124695316-eb520a00-df1d-11eb-9dc3-28df2e86fbd9.png" height="250" width="350"> <img src="https://user-images.githubusercontent.com/53927959/124695333-f3aa4500-df1d-11eb-8058-f9e165ed2d89.png" height="250" width="300">


__<그림-3>__ 　　　　　　　　　　　　　　　　　　__<그림-4>__
<p/>

  
#### 1.3 회원가입 및 로그인/로그아웃
  
       <그림-5>와 같이 로그인이 안되어 있는 상태에서는 Navbar에 회원 가입 및 우측 상단에 로그인 버튼이 있으며 로그인 버튼을 클릭하면
       로그인을 할 수 있으며 회원 가입시 이미 존재하는 이메일을 제외하고 가입을 할 수 있게 허용하였다. 그 밖에 <그림-6>과 같이 로그
       인을 하고 나면 화면 우측 상단에 로그인 된 아이디 및 로그아웃을 할 수 있는 버튼이 활성화되어 있다.
<p align="left">
<img src="https://user-images.githubusercontent.com/53927959/124696113-741d7580-df1f-11eb-8200-c361708b0a25.png" height="250" width="350"> <img src="https://user-images.githubusercontent.com/53927959/124696134-7b448380-df1f-11eb-9079-61ffa1fe62a4.png" height="250" width="350">


__<그림-5>__ 　　　　　　　　　　　　　　　　　　__<그림-6>__


<img src="https://user-images.githubusercontent.com/53927959/124696289-b941a780-df1f-11eb-8d60-fffcb2cbc5be.JPG" height="250" width="350"> <img src="https://user-images.githubusercontent.com/53927959/124696294-bba40180-df1f-11eb-92e9-49682d90648b.JPG" height="250" width="350">
<p/>
    
  
<br>
<br>
  
## 2. 프로젝트 운영환경 및 기타
  
#### 운영환경
  
 1. 가상서버 및 웹 서버 소프트웨어
   - Vultr, Nginx

 2. Operation System:
   - Ubuntu 16.04

 3. Frontend:
   - React

 4. Backend:
   - Nodejs, express

 5. 데이터베이스 관리 시스템:
   - MongoDB
  
#### 참조
1.	한국도로공사. (2020).휴게소 푸드메뉴현황 조회 [Open API]. https://www.data.go.kr/data/15059337/openapi.do


