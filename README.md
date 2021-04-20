## 사용법

```sh
npm i
npm test
```

## Test Cases

[Test Case 확인하기](./testcase.md)

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

## Functions

#### Object parseResponse(String)
- parse response
- return value example (GET / )

```
    {
      protocolVersion: 'HTTP/1.1',
      statusCode: 200,
      statusMessage: 'OK',
      headers: {
        'content-language': 'ko',
        'content-length': '251',
        'content-type': 'text/html',
        date: 'Wed, 21 Apr 2021 02:11:03 KST',
        'last-modified': 'Wed, 21 Apr 2021 02:11:03 KST',
        server: 'ftinx/0.1: second_server',
        status: '200'
      },
      body: '<!DOCTYPE html>\r\n' +
        '<html lang="en">\r\n' +
        '<head>\r\n' +
        '\t<meta charset="UTF-8">\r\n' +
        '\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n' +
        '\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n' +
        '\t<title>Document</title>\r\n' +
        '</head>\r\n' +
        '<body>\r\n' +
        '\thi\r\n' +
        '</body>\r\n' +
        '</html>\r\n'
    }
```

#### String rawtest(host: String, port: Number, requestMessage: String)
- request response message by socket
#### writeLog(filename: String, log: String)
- write log to filename
#### messageLog(log: String)
- append log to http_response.log


## To Do
- Chunked 처리 (현재는 content-length만 처리됨)
- 파일로 나뉘어져있는 변수 하나로 합치기
