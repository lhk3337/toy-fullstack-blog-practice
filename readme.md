# [TOY] 리액트 다루는 기술의 블로그 만들기

배울점 : 회원 가입, 로그인, 인증 구현, 서버(BackEnd)와 클라이언트(FrontEnd)간 CRUD패턴

서버는 DB의 데이터를 가져와서 Rest Api형태로 클라이언트에게 전달

## Dir Structure

### backend

- src
  - api : rest API 설정하기
    - auth : 로그인
    - posts: 포스팅
  - lib : library
  - models : DB 모델 설정

### frontend

- src
  - components blog presentation (화면 표현)
    - auth : 로그인 페이지
    - common : Reuse Components
  - containers : blog의 데이터 부분, redux관련
    - auth : 로그인 페이지 데이터
    - common : Reuse Components 데이터
  - lib
    - api : backend api (axios)
    - styles : CSS Color palette
  - pages : react router page
  - modules : redux

## Sequence

### Front End

App -> Router -> Page -> Container -> components

## Data Flow

### Front End

API -> Redux Saga -> React Redux -> Container

## Redux Data Type

### - auth Reducer

- reg : {username: `String`, password: `String`, passwordConfirm: `String`}
- login : {username: `String`, password: `String`}
- auth : {\_id: `String`, username: `String`}
- authError : `null`

### - loading Reducer

- auth/LOGIN: `Boolean`
- auth/CHECK: `Boolean`

### - user Reducer

- user: {\_id: `String`, username: `String`}
- checkError: `null`

### - write Reducer

- title: `String`
- body: `String`
- tags: `[ ]`

<img width="494" alt="스크린샷 2022-07-28 오후 6 27 13" src="https://user-images.githubusercontent.com/44824320/181472280-01fab50f-3bf9-4452-9144-075f7e3c82c7.png">
