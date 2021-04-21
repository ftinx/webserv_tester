const { rawtest, writeLog, parseResponse } = require("./rawtester.js");
const { port, multiple_port, host, root_auth_type, root_auth_scheme, getAuthHeader, trace_path } = require("./setting.js");
const authHeader = getAuthHeader(root_auth_type, root_auth_scheme);

describe("TRACE loop-back", () => {
  test("trace /trace", async (done) => {
    const request =
      "TRACE " + trace_path + " HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
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
    expect(res.headers['content-type']).toBe('message/http');
    expect(res.body).toBe(request);
    done();
  });
  test("trace /", async (done) => {
    const request =
      "TRACE / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(405);
    done();
  });
  test("trace /put_test", async (done) => {
    const request =
      "TRACE /put_test HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(405);
    done();
  });
  test("trace /post_body", async (done) => {
    const request =
      "TRACE /post_body HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(405);
    done();
  });
  test("trace /directory", async (done) => {
    const request =
      "TRACE /directory HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(405);
    done();
  });
  test("trace /rawtest", async (done) => {
    const request =
      "TRACE /rawtest HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(404);
    done();
  });
  test("trace /rawtest2", async (done) => {
    const request =
      "TRACE /rawtest2 HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(404);
    done();
  });
});
