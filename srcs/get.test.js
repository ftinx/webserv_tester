const { rawtest, writeLog, parseResponse } = require("./rawtester.js");
const { port, multiple_port, host, root_auth_type, root_auth_scheme, getAuthHeader, redirect_301_port, redirect_302_port, location } = require("./setting.js");
const authHeader = getAuthHeader(root_auth_type, root_auth_scheme);

describe("GET valid path", () => {
    test("GET /", async (done) => {
      const request =
        "GET / HTTP/1.1\r\n" +
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
      writeLog("response_message.json", JSON.stringify(res));
      expect(res.protocolVersion).toBe('HTTP/1.1');
      expect(res.statusCode).toBe(200);
      done();
    });
  });

describe("GET invalid path", () => {
    test("GET /put_test", async (done) => {
        const request =
          "GET /put_test HTTP/1.1\r\n" +
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
      let res;
      try {
        res = parseResponse(await rawtest(host, port, request));
      } catch (err) {
        res = {};
      }
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
      let res;
      try {
        res = parseResponse(await rawtest(host, port, request));
      } catch (err) {
        res = {};
      }
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
        let res;
        try {
          res = parseResponse(await rawtest(host, port, request));
        } catch (err) {
          res = {};
        }
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
      let res;
      try {
        res = parseResponse(await rawtest(host, port, request));
      } catch (err) {
        res = {};
      }
      writeLog("response_message.json", JSON.stringify(res));
      expect(res.protocolVersion).toBe('HTTP/1.1');
      expect(res.statusCode).toBe(404);
      done();
    });
})

describe("GET valid Http Request Header", () => {
    test("GET Accept-Language: ko", async (done) => {
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
      let res;
      try {
        res = parseResponse(await rawtest(host, port, request));
      } catch (err) {
        res = {};
      }
      writeLog("Accept_Language_en.html", res.body);
      expect(res.protocolVersion).toBe('HTTP/1.1');
      expect(res.statusCode).toBe(200);
      expect(res.headers['content-language']).toBe("en");
      done();
    });
    test("GET Allow", async (done) => {
      const request =
        "GET /post_body HTTP/1.1\r\n" +
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
      expect(res.headers['allow']).toBe("POST");
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
    }
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
})

describe("GET invalid Http Request Header", () => {
    test("GET no Host", async (done) => {
      const request =
        "GET / HTTP/1.1\r\n" +
        "Accept: */*\r\n" +
        "User-Agent: rawtester\r\n" +
        authHeader +
        "\r\n";
      let res;
      try {
        res = parseResponse(await rawtest(host, port, request));
      } catch (err) {
        res = {};
      }
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
      let res;
      try {
        res = parseResponse(await rawtest(host, port, request));
      } catch (err) {
        res = {};
      }
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
      let res;
      try {
        res = parseResponse(await rawtest(host, port, request));
      } catch (err) {
        res = {};
      }
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
      let res;
      try {
        res = parseResponse(await rawtest(host, port, request));
      } catch (err) {
        res = {};
      }
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
      let res;
      try {
        res = parseResponse(await rawtest(host, port, request));
      } catch (err) {
        res = {};
      }
      expect(res.protocolVersion).toBe('HTTP/1.1');
      expect(res.statusCode).toBe(400);
      done();
    });
    if (root_auth_scheme) {
      test("GET Authorization (1)", async (done) => {
        const request =
          "GET / HTTP/1.1\r\n" +
          "Accept: */*\r\n" +
          "User-Agent: rawtester\r\n" +
          "Host: " + host + ":" + port + "\r\n" +
          "\r\n";
        let res;
        try {
          res = parseResponse(await rawtest(host, port, request));
        } catch (err) {
          res = {};
        }
        expect(res.protocolVersion).toBe('HTTP/1.1');
        expect(res.statusCode).toBe(401);
        done();
      });
      test("GET Authorization (2)", async (done) => {
        const request =
          "GET / HTTP/1.1\r\n" +
          "Accept: */*\r\n" +
          "User-Agent: rawtester\r\n" +
          "Host: " + host + ":" + port + "\r\n" +
          "Authorization: " + root_auth_type + ' fail' + "\r\n" +
          "\r\n";
        let res;
        try {
          res = parseResponse(await rawtest(host, port, request));
        } catch (err) {
          res = {};
        }
        expect(res.protocolVersion).toBe('HTTP/1.1');
        expect(res.statusCode).toBe(403);
        done();
      });
    }
})

describe("MULTIPLE PORT", () => {
  if (multiple_port) {
    test("GET /", async (done) => {
      const request =
        "GET / HTTP/1.1\r\n" +
        "Accept: */*\r\n" +
        "User-Agent: rawtester\r\n" +
        "Host: " + host + ":" + multiple_port + "\r\n" +
        authHeader +
        "\r\n";
      let res;
      try {
        res = parseResponse(await rawtest(host, port, request));
      } catch (err) {
        res = {};
      }
      writeLog("response_message_multiple_port.json", JSON.stringify(res));
      expect(res.protocolVersion).toBe('HTTP/1.1');
      expect(res.statusCode).toBe(200);
      done();
    });
  }
});

describe("GET Redirect", () => {
  test("GET /redirect 302", async (done) => {
      const request =
          "GET /redirect HTTP/1.1\r\n" +
          "Accept: */*\r\n" +
          "User-Agent: rawtester\r\n" +
          "Host: " + host + ":" + redirect_301_port + "\r\n" +
          "\r\n";
      let res;
      try {
          res = parseResponse(await rawtest(host, redirect_301_port, request));
      } catch (err) {
          res = {};
      }
      writeLog("response_message.json", JSON.stringify(res));
      expect(res.protocolVersion).toBe('HTTP/1.1');
      expect(res.statusCode).toBe(302);
      expect(res.headers['location']).not.toBeUndefined();
      done();
  });
  test("GET / 301", async (done) => {
    const request =
        "GET / HTTP/1.1\r\n" +
        "Accept: */*\r\n" +
        "User-Agent: rawtester\r\n" +
        "Host: " + host + ":" + redirect_302_port + "\r\n" +
        "\r\n";
    let res;
    try {
        res = parseResponse(await rawtest(host, redirect_302_port, request));
    } catch (err) {
        res = {};
    }
    writeLog("response_message.json", JSON.stringify(res));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(301);
    expect(res.headers['location']).toBe(location);
    done();
});
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
