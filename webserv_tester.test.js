const { rawtest, writeLog, parseResponse } = require("./rawtester.js");

const port = 8080;
const host = "localhost";
const root_auth_type = "Basic";
const root_auth_scheme = "";
// jest.setTimeout(5000);

describe("GET", () => {
  let authHeader = ''
  if (root_auth_scheme) {
    authHeader = "Authorization: " + root_auth_type + ' ' + root_auth_scheme + "\r\n";
  }

  test("GET /", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    writeLog("response_message.json", JSON.stringify(res));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    done();
  });
  test("GET no Host", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      authHeader +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(400);
    done();
  });
  test("GET Host duplicate (1)", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Host: rawtester" + "\r\n" +
      authHeader +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(400);
    done();
  });
  test("GET Host duplicate (2)", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "HOST: rawtester" + "\r\n" +
      authHeader +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(400);
    done();
  });
  test("GET Host duplicate (3)", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "host: rawtester" + "\r\n" +
      authHeader +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(400);
    done();
  });
  test("GET Host duplicate (4)", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "HOST: " + host + ":" + port + "\r\n" +
      "host: rawtester" + "\r\n" +
      authHeader +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(400);
    done();
  });
  test("GET Accept-Language: ko", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Accept-Language: ko" + "\r\n" +
      authHeader +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    writeLog("Accept_Language_ko.html", res.body);
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-language']).toBe("ko");
    done();
  });
  test("GET Accept-Language: en", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Accept-Language: en" + "\r\n" +
      authHeader +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    writeLog("Accept_Language_en.html", res.body);
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-language']).toBe("en");
    done();
  });
  if (root_auth_scheme) {
    test("GET Authorization", async (done) => {
      const request =
        "GET / HTTP/1.1\r\n" +
        "Accept: */*\r\n" +
        "User-Agent: rawtester\r\n" +
        "Host: " + host + ":" + port + "\r\n" +
        authHeader +
        "\r\n";
      const res = parseResponse(await rawtest(host, port, request));
      expect(res.protocolVersion).toBe('HTTP/1.1');
      expect(res.statusCode).toBe(200);
      done();
    });
    test("GET Authorization (1)", async (done) => {
      const request =
        "GET / HTTP/1.1\r\n" +
        "Accept: */*\r\n" +
        "User-Agent: rawtester\r\n" +
        "Host: " + host + ":" + port + "\r\n" +
        "\r\n";
      const res = parseResponse(await rawtest(host, port, request));
      expect(res.protocolVersion).toBe('HTTP/1.1');
      expect(res.statusCode).toBe(401);
      done();
    });
    test("GET Authorization", async (done) => {
      const request =
        "GET / HTTP/1.1\r\n" +
        "Accept: */*\r\n" +
        "User-Agent: rawtester\r\n" +
        "Host: " + host + ":" + port + "\r\n" +
        "Authorization: " + root_auth_type + ' fail' + "\r\n" +
        "\r\n";
      const res = parseResponse(await rawtest(host, port, request));
      expect(res.protocolVersion).toBe('HTTP/1.1');
      expect(res.statusCode).toBe(403);
      done();
    });
  }
});

describe("POST", () => {
  test("POST CGI", async (done) => {
    const request =
      "POST /directory/YoupiBanane/aa.bla HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 7\r\n" +
      "\r\n" + 
      "abcdefg";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    if (res.headers['transfer-encoding'] == 'chunked')
    {
      expect(res.body).toBe('7\r\nABCDEFG\r\n0\r\n\r\n');
    }
    else 
    {
      expect(res.headers['content-length']).toBe('7');
      expect(res.body).toBe('ABCDEFG');
    }
    done();
  });
});