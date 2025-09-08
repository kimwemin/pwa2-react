1. React Router 설치
npm install react-router-dom
특정 버전 설치는 뒤에 @버전숫자 로 치면 된다.

이미 package.json에 다운되어있는 파일을 받았을 경우
npm install 만 치면 된다.

2. Router 컴포넌트 생성
경로는 개발자 취향껏
/src/routes/Router.jsx

3. mail.jsx에 App 컴포넌트 대신 Router 컴포넌트  변경

4. 라우터로 관리하고 싶은 컴포넌트를 만든다.

5. Router 컴포넌트의 Router 객체 정의를 HTML 구조에 맞게 설정

<!-- Redux -->
<!-- 상태 관리 라이브러리, 중앙 집중식 상태관리 패턴 구현 -->
1. Redux 설치
npm install @reduxjs/toolkit react-redux
특정 버전 설치는 뒤에 @버전숫자 로 치면 된다.

2. Redux Store 생성
경로 예시. src/store/store.js

3. Slices 생성
경로 예시. src/store/slices or modules/**

4. 생성한 Slices를 Store에 추가

5. main.jsx에 React Redux <Provider> 추가 (StrctMode를 제외한  최상위 컴포넌트 일 것)

6. 사용