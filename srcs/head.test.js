const { rawtest, writeLog, parseResponse } = require("./rawtester.js");
const { port, multiple_port, host, root_auth_type, root_auth_scheme, getAuthHeader, head_path } = require("./setting.js");
const authHeader = getAuthHeader(root_auth_type, root_auth_scheme);

describe("Head", () => {
    let res;
    test("GET head_path", async (done) => {
        const request =
          "GET " + head_path + " HTTP/1.1\r\n" +
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

    test("HEAD head_path", async (done) => {
      const request =
        "HEAD " + head_path + " HTTP/1.1\r\n" +
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
      expect({...headRes.headers, "date": "", "last-modified": ""}).toStrictEqual({...res.headers, "date": "", "last-modified": ""});
      done();
    });
});
