const { rawtest, writeLog, parseResponse } = require("./rawtester.js");

const port = 8080;
const multiple_port = 8081;
const host = "localhost";
const root_auth_type = "Basic";
const root_auth_scheme = "";

const trace_path = "/";
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
  test("GET /put_test", async (done) => {
    const request =
      "GET /put_test HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    writeLog("response_message.json", JSON.stringify(res));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(405);
    done();
  });
  test("GET /post_body", async (done) => {
    const request =
      "GET /post_body HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    writeLog("response_message.json", JSON.stringify(res));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(405);
    done();
  });
  test("GET /rawtester", async (done) => {
    const request =
      "GET /rawtester HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    writeLog("response_message.json", JSON.stringify(res));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(404);
    done();
  });
  test("GET /rawtester/sad/sadas/dasdasdas/das/dasd/asd/asdasd/asd/sad/sa/das/das/ddsa", async (done) => {
    const request =
      "GET /rawtester HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    writeLog("response_message.json", JSON.stringify(res));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(404);
    done();
  });
  test("GET /rawtester/rawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtester", async (done) => {
    const request =
      "GET /rawtester/rawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtester HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      authHeader +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    writeLog("response_message.json", JSON.stringify(res));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(404);
    done();
  });
  // test("GET /rawtester/rawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtester", async (done) => {
  //   const request =
  //     "GET /rawtester/rawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtester HTTP/1.1\r\n" +
  //     "Accept: */*\r\n" +
  //     "User-Agent: rawtester\r\n" +
  //     "Host: " + host + ":" + port + "\r\n" +
  //     authHeader +
  //     "\r\n";
  //   const res = parseResponse(await rawtest(host, port, request));
  //   writeLog("response_message.json", JSON.stringify(res));
  //   expect(res.protocolVersion).toBe('HTTP/1.1');
  //   expect(res.statusCode).toBe(404);
  //   done();
  // });
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
    if (res.headers['transfer-encoding'] != 'chunked') 
      expect(res.headers['content-length']).toBe('7');
    done();
  });
  test("post_body 10", async (done) => {
    const request =
      "POST /directory/YoupiBanane/aa.bla HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 10\r\n" +
      "\r\n" + 
      "0123456789";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    if (res.headers['transfer-encoding'] != 'chunked')
      expect(res.headers['content-length']).toBe('10');
    done();
  });
  test("post_body 100", async (done) => {
    const request =
      "POST /directory/YoupiBanane/aa.bla HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 100\r\n" +
      "\r\n" + 
      "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    if (res.headers['transfer-encoding'] != 'chunked')
      expect(res.headers['content-length']).toBe('100');
    done();
  });
  test("post_body 200", async (done) => {
    const request =
      "POST /directory/YoupiBanane/aa.bla HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 200\r\n" +
      "\r\n" + 
      "01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(405);
    done();
  });
  test("post_body 101", async (done) => {
    const request =
      "POST /directory/YoupiBanane/aa.bla HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 101\r\n" +
      "\r\n" + 
      "01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(405);
    done();
  });
});

describe("TRACE", () => {
  test("trace loop-back", async (done) => {
    const request =
      "TRACE " + trace_path + " HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toBe('message/http');
    expect(res.body).toBe(request);
    done();
  }); 
});

describe("OPTIONS", () => {
  test("options", async (done) => {
    const request =
      "OPTIONS / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "\r\n";
    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    expect(res.headers['allow']).not.toBeUndefined();
    if (!res.headers['transfer-encoding'])
      expect(res.headers['content-length']).not.toBeUndefined();
    done();
  }); 
});

describe("PUT", () => {
  test("/put_test", async (done) => {
    const request =
      "PUT /new.html HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 16\r\n" +
      "Content-type: text/html\r\n" +
      "\r\n" +
      "<p>New File</p>";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode === 201 || res.statusCode === 204).toBe(true);
    expect(res.headers['Content-Location']).tobe("/new.html");
    done();
  }); 
  test("/put_test", async (done) => {
    const request =
      "PUT /new.html HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 16\r\n" +
      "Content-type: text/html\r\n" +
      "\r\n" +
      "<p>hi</p>";
    let res;
    try {
      res = parseResponse(await rawtest(host, port, request));
    } catch (err) {
      res = {};
    }
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode === 201 || res.statusCode === 204).toBe(true);
    expect(res.headers['Content-Location']).tobe("/new.html");
    done();
  }); 
});

describe("MULTIPLE PORT", () => {
  test("GET /", async (done) => {
    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + multiple_port + "\r\n" +
      "\r\n";
    const res = parseResponse(await rawtest(host, multiple_port, request));
    writeLog("response_message_multiple_port.json", JSON.stringify(res));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    done();
  });
  test("options", async (done) => {
    const request =
      "OPTIONS / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + multiple_port + "\r\n" +
      "\r\n";
    const res = parseResponse(await rawtest(host, multiple_port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    expect(res.headers['allow']).not.toBeUndefined();
    if (!res.headers['transfer-encoding'])
      expect(res.headers['content-length']).not.toBeUndefined();
    done();
  }); 
});