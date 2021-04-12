const { rawtest, parseResponse } = require("./rawtest.js");

const port = 8080;
const host = "localhost";

// jest.setTimeout(5000);

describe("Test the root path", () => {
  test("It should response the GET method", async (done) => {
    // const request = [
    //   'GET / HTTP/1.1',
    //   'Accept: */*',
    //   'User-Agent: my-test-agent',
    //   'Host: localhost:' + port,
    //   '',
    //   '',
    // ].join('\r\n');

    const request =
      "GET / HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: my-test-agent\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "\r\n";

    const res = parseResponse(await rawtest(host, port, request));
    expect(res.protocolVersion).toBe('HTTP/1.1');
    expect(res.statusCode).toBe(200);
    done();
  });
});