const { rawtest, writeLog, parseResponse } = require("./rawtester.js");
const { port, multiple_port, host, root_auth_type, root_auth_scheme, getAuthHeader, options_path } = require("./setting.js");
const authHeader = getAuthHeader(root_auth_type, root_auth_scheme);

describe("OPTIONS", () => {
    test("options options_path", async (done) => {
      const request =
        "OPTIONS " + options_path + " HTTP/1.1\r\n" +
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
      expect(res.statusCode >= 200 && res.statusCode <= 204).toBe(true);
      expect(res.headers['allow']).not.toBeUndefined();
      done();
    });
    test("options /", async (done) => {
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
      expect(res.statusCode).toBe(405);
      expect(res.headers['allow']).not.toBeUndefined();
      done();
  });
    test("options /put_test", async (done) => {
        const request =
          "OPTIONS /put_test HTTP/1.1\r\n" +
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
        expect(res.headers['allow']).not.toBeUndefined();
        done();
    });
    test("options /post_body", async (done) => {
        const request =
          "OPTIONS /post_body HTTP/1.1\r\n" +
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
        expect(res.headers['allow']).not.toBeUndefined();
        done();
    });
    test("options /directory", async (done) => {
        const request =
          "OPTIONS /directory HTTP/1.1\r\n" +
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
        expect(res.headers['allow']).not.toBeUndefined();
        done();
    });
    test("options /rawtest", async (done) => {
        const request =
          "OPTIONS /rawtest HTTP/1.1\r\n" +
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
        expect(res.headers['allow']).toBeUndefined();
        done();
    });
    test("options /rawtest2", async (done) => {
        const request =
          "OPTIONS /rawtest2 HTTP/1.1\r\n" +
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
        expect(res.headers['allow']).toBeUndefined();
        done();
    });
  });

// test("options *", async (done) => {
//     const request =
//       "OPTIONS * HTTP/1.1\r\n" +
//       "Accept: */*\r\n" +
//       "User-Agent: rawtester\r\n" +
//       "Host: " + host + ":" + port + "\r\n" +
//       authHeader +
//       "\r\n";
//     let res;
//     try {
//       res = parseResponse(await rawtest(host, port, request));
//     } catch (err) {
//       res = {};
//     }
//     expect(res.protocolVersion).toBe('HTTP/1.1');
//     expect(res.statusCode).toBe(404);
//     expect(res.headers['allow']).not.toBeUndefined();
//     done();
// });
