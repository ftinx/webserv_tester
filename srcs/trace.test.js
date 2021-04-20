const { rawtest, writeLog, parseResponse } = require("./rawtester.js");

const port = 8080;
const host = "localhost";
const root_auth_type = "Basic";
const root_auth_scheme = "";

const trace_path = "/trace";

describe("TRACE loop-back", () => {
  let authHeader = ''
  if (root_auth_scheme) {
    authHeader = "Authorization: " + root_auth_type + ' ' + root_auth_scheme + "\r\n";
  }
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
