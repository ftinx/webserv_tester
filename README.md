## 사용법

```sh
npm i
npm test
```

## Test Cases

### GET

- GET valid path
  - GET /
    - Expect response: 200
- GET invalid path
  - GET /put_test
    - Expect response: 405
  - GET /post_body
    - Expect response: 405
  - GET /rawtester
    - Expect response: 404
  - GET /rawtester/sad/sadas/dasdasdas/das/dasd/asd/asdasd/asd/sad/sa/das/das/ddsa
    - Expect response: 404
  - GET /rawtester/rawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtester
    - Expect response: 404
- GET invalid Http Request Header
  - GET no Host
    - Expect response: 400
  - GET Host duplicate (1)
    - Expect response: 400
  - GET Host duplicate (2)
    - Expect response: 400
  - GET Host duplicate (3)
    - Expect response: 400
  - GET Host duplicate (4)
    - Expect response: 400
  - GET Accept-Language: ko
    - Expect response: Accept_Language_ko.html
  - GET Accept-Language: en
    - Expect response: Accept_Language_en.html
  - GET Authorization
    - Expect response: 200
  - GET Authorization (1)
    - Expect response: 401
  - GET Authorization (2)
    - Expect response: 403

## Files

- http_response.log
  - Request Message(Test Case)와 Response Message 로그
- Accept_Language_en.html
  - 영문 페이지 확인 가능
- Accept_Language_ko.html
  - 영문 페이지 확인 가능
- response_message.json
  - [port] GET / 에 대한 파싱 정보 확인 가능 (VSCODE Prettier 설치 후 Format Document로 정제 권장)
- response_message_multiple_port.json
  - [multiple_port] GET / 에 대한 파싱 정보 확인 가능 (VSCODE Prettier 설치 후 Format Document로 정제 권장)

## Clean Files

#### http_response.log 빼고 clean

```sh
npm run --silent clean
```

#### 모든 Files clean

```sh
npm run --silent fclean
```

## To Do
- Chunked 처리 (현재는 content-length만 처리됨)
