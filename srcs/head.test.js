const { rawtest, writeLog, parseResponse } = require("./rawtester.js");

const port = 8081;
const host = "localhost";
const root_auth_type = "Basic";
const root_auth_scheme = "aG9sZWU6MDIyMg==";

describe("Head", () => {
    let res;
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

    test("GET /", async (done) => {
      const request =
        "HEAD / HTTP/1.1\r\n" +
        "Accept: */*\r\n" +
        "User-Agent: rawtester\r\n" +
        "Host: " + host + ":" + port + "\r\n" +
        authHeader +
        "\r\n";
      let headRes;
      try {
        headRes = parseResponse(await rawtest(host, port, request));
      } catch (err) {
        headRes = {};
      }
      writeLog("response_message.json", JSON.stringify(headRes));
      expect(headRes.protocolVersion).toBe('HTTP/1.1');
      expect(headRes.statusCode).toBe(200);
      done();
    });
});
