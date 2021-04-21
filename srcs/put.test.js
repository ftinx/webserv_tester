const { rawtest, parseResponse } = require("./rawtester.js");

const port = 8080;
const host = "localhost";
const root_auth_type = "Basic";
const root_auth_scheme = "aG9sZWU6MDIyMg==";

let authHeader = ''
if (root_auth_scheme) {
  authHeader = "Authorization: " + root_auth_type + ' ' + root_auth_scheme + "\r\n";
}

let putIdempotency;

describe("PUT", () => {
  test("/put_test/rawtest.html", async (done) => {
    const request =
      "PUT /put_test/rawtest.html HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 15\r\n" +
      "Content-type: text/html\r\n" +
      authHeader +
      "\r\n" +
      "<p>New File</p>";
    try {
      putIdempotency = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      putIdempotency = {};
    }
    expect(putIdempotency.protocolVersion).toBe('HTTP/1.1');
    expect(putIdempotency.statusCode).toBe(201);
    expect(putIdempotency.headers['content-location']).not.toBeUndefined();
    done();
  });
  test("/put_test/rawtest.html Idempotency", async (done) => {
    const request =
      "PUT /put_test/rawtest.html HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 15\r\n" +
      "Content-type: text/html\r\n" +
      authHeader +
      "\r\n" +
      "<p>New File</p>";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toStrictEqual(putIdempotency.protocolVersion);
    expect(res.statusCode).toStrictEqual(putIdempotency.statusCode);
    expect({...res.headers, "last-modified": "", "date": ""}).toStrictEqual({...putIdempotency.headers, "last-modified": "", "date": ""});
    expect(res.body).toStrictEqual(putIdempotency.body);
    done();
  });
  test("/put_test/rawtest2.html", async (done) => {
    const request =
      "PUT /put_test/rawtest2.html HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 15\r\n" +
      "Content-type: text/html\r\n" +
      authHeader +
      "\r\n" +
      "<p>New File</p>";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(201);
    expect(res.headers['content-location']).not.toBeUndefined();
    done();
  });
  test("/put_test/rawtest3", async (done) => {
    const request =
      "PUT /put_test/rawtest3 HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 0\r\n" +
      "Content-type: text/html\r\n" +
      "\r\n";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(201);
    expect(res.headers['content-location']).not.toBeUndefined();
    done();
  });
  test("/put_test/rawtest4", async (done) => {
    const request =
      "PUT /put_test/rawtest4 HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 10\r\n" +
      "Content-type: text/html\r\n" +
      "\r\n" +
      "0123456789";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(201);
    expect(res.headers['content-location']).not.toBeUndefined();
    done();
  });
  test("/put_test/rawtest5", async (done) => {
    const request =
      "PUT /put_test/rawtest5 HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 100\r\n" +
      "Content-type: text/html\r\n" +
      "\r\n" +
      "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(201);
    expect(res.headers['content-location']).not.toBeUndefined();
    done();
  });
  test("/put_test/rawtest6", async (done) => {
    const request =
      "PUT /put_test/rawtest6 HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 1000\r\n" +
      "Content-type: text/html\r\n" +
      "\r\n" +
      "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(201);
    expect(res.headers['content-location']).not.toBeUndefined();
    done();
  });
});


describe("DELETE valid path", () => {
  test("/put_test/rawtest.html", async (done) => {
    const request =
      "DELETE /put_test/rawtest.html HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    try {
      putIdempotency = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      putIdempotency = {};
    }
    expect(putIdempotency.protocolVersion).toBe('HTTP/1.1');
    expect(putIdempotency.statusCode).toBe(200);
    done();
  });
  test("/put_test/rawtest2.html", async (done) => {
    const request =
      "DELETE /put_test/rawtest2.html HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    try {
      putIdempotency = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      putIdempotency = {};
    }
    expect(putIdempotency.protocolVersion).toBe('HTTP/1.1');
    expect(putIdempotency.statusCode).toBe(200);
    done();
  });
  test("/put_test/rawtest3", async (done) => {
    const request =
      "DELETE /put_test/rawtest3 HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    try {
      putIdempotency = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      putIdempotency = {};
    }
    expect(putIdempotency.protocolVersion).toBe('HTTP/1.1');
    expect(putIdempotency.statusCode).toBe(200);
    done();
  });
  test("/put_test/rawtest4", async (done) => {
    const request =
      "DELETE /put_test/rawtest4 HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    try {
      putIdempotency = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      putIdempotency = {};
    }
    expect(putIdempotency.protocolVersion).toBe('HTTP/1.1');
    expect(putIdempotency.statusCode).toBe(200);
    done();
  });
  test("/put_test/rawtest5", async (done) => {
    const request =
      "DELETE /put_test/rawtest5 HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    try {
      putIdempotency = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      putIdempotency = {};
    }
    expect(putIdempotency.protocolVersion).toBe('HTTP/1.1');
    expect(putIdempotency.statusCode).toBe(200);
    done();
  });
  test("/put_test/rawtest6", async (done) => {
    const request =
      "DELETE /put_test/rawtest6 HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    try {
      putIdempotency = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      putIdempotency = {};
    }
    expect(putIdempotency.protocolVersion).toBe('HTTP/1.1');
    expect(putIdempotency.statusCode).toBe(200);
    done();
  });
})

describe("DELETE invalid path", () => {
  test("/put_test/rawtest/asdasdasdasdasdasd/asdasdasdasdasd", async (done) => {
    const request =
      "DELETE /put_test/rawtest/asdasdasdasdasdasd/asdasdasdasdasd HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    try {
      putIdempotency = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      putIdempotency = {};
    }
    expect(putIdempotency.protocolVersion).toBe('HTTP/1.1');
    expect(putIdempotency.statusCode).toBe(404);
    done();
  });
  test("/put_test/rawtest/asdasdasdasdasdasd/asdasdasdasdasdasdasdasdasdasdasdasddasdasdasd", async (done) => {
    const request =
      "DELETE /put_test/rawtest/asdasdasdasdasdasd/asdasdasdasdasdasdasdasdasdasdasdasddasdasdasd HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    try {
      putIdempotency = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      putIdempotency = {};
    }
    expect(putIdempotency.protocolVersion).toBe('HTTP/1.1');
    expect(putIdempotency.statusCode).toBe(404);
    done();
  });
  test("/put_test/rawtest/asdasdasdasdasdasd/asdasdasdasdasdasdasdasdasdasdasdasddasdasdasd/asdasdasdas/dasdasdsa", async (done) => {
    const request =
      "DELETE /put_test/rawtest/asdasdasdasdasdasd/asdasdasdasdasdasdasdasdasdasdasdasddasdasdasd/asdasdasdas/dasdasdsa HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    try {
      putIdempotency = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      putIdempotency = {};
    }
    expect(putIdempotency.protocolVersion).toBe('HTTP/1.1');
    expect(putIdempotency.statusCode).toBe(404);
    done();
  });
});
