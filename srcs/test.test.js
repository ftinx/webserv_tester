const { rawtest, writeLog, parseResponse } = require("./rawtester.js");
const { port, multiple_port, host, root_auth_type, root_auth_scheme, getAuthHeader, options_path } = require("./setting.js");
const authHeader = getAuthHeader(root_auth_type, root_auth_scheme);

describe("TEST", () => {
  test("GET Content-Language", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Accept-Language: ko" + "\r\n" +
      authHeader +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    expect(["ko", "ko-kr"].includes(res.headers['content-language'])).toBe(true);
    done();
  });
  test("GET Content-Length", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Accept-Language: ko" + "\r\n" +
      authHeader +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-length']).not.toBeUndefined();
    done();
  });
  test("GET Content-Type", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Accept-Language: ko" + "\r\n" +
      authHeader +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).not.toBeUndefined();
    done();
  });
  test("GET Date", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Accept-Language: ko" + "\r\n" +
      authHeader +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    expect(res.headers['date']).not.toBeUndefined();
    done();
  });
  test("GET Host", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Accept-Language: ko" + "\r\n" +
      authHeader +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    done();
  });
  test("GET Last-Modified", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Accept-Language: ko" + "\r\n" +
      authHeader +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    expect(res.headers['last-modified']).not.toBeUndefined();
    done();
  });
  test("GET Server", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Accept-Language: ko" + "\r\n" +
      authHeader +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    expect(res.headers['server']).not.toBeUndefined();
    done();
  });
});

