const { rawtest, writeLog, parseResponse } = require("./rawtester.js");

const port = 8080;
const host = "localhost";

// jest.setTimeout(5000);

describe("GET", () => {
  test("GET /", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    done();
  });
  test("GET no Host", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
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
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(400);
    done();
  });
  test("GET Accpet-Language: ko", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Accpet-Language: ko" + "\r\n" +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    writeLog("Accpet_Language_ko.html", res.body);
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    expect(res.headers['Content-Language']).toBe("ko");
    done();
  });
  test("GET Accpet-Language: en", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Accpet-Language: en" + "\r\n" +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    writeLog("Accpet_Language_en.html", res.body);
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    expect(res.headers['Content-Language']).toBe("en");
    done();
  });
});