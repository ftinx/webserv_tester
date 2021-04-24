const { rawtest, writeLog, parseResponse } = require("./rawtester.js");
const { port, multiple_port, host, root_auth_type, root_auth_scheme, getAuthHeader, options_path } = require("./setting.js");
const authHeader = getAuthHeader(root_auth_type, root_auth_scheme);

describe("TEST", () => {
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
});

