### 사용법

```sh
npm i
npm test
```

## Files

- Accept_Language_en.html
  - 영문 페이지 확인 가능
- Accept_Language_ko.html
  - 영문 페이지 확인 가능
- response_message.json
  - GET / 에 대한 파싱 정보 확인 가능 (VSCODE Prettier 설치 후 Format Document로 정제 권장)

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