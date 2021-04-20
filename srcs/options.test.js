const { rawtest, writeLog, parseResponse } = require("./rawtester.js");

const port = 8080;
const host = "localhost";
const root_auth_type = "Basic";
const root_auth_scheme = "dG9ueWJ5ZW9uOjAyMjI=";

describe("OPTIONS", () => {
    let authHeader = ''
    if (root_auth_scheme) {
      authHeader = "Authorization: " + root_auth_type + ' ' + root_auth_scheme + "\r\n";
    }
    test("options", async (done) => {
      const request =
        "OPTIONS / HTTP/1.1\r\n" +
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
      expect(res.headers['allow']).not.toBeUndefined();
      if (!res.headers['transfer-encoding'])
        expect(res.headers['content-length']).not.toBeUndefined();
      done();
    });
  });
