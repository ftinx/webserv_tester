const { rawtest, parseResponse } = require("./rawtester.js");

const port = 8080;
const host = "localhost";
const root_auth_type = "Basic";
const root_auth_scheme = "aG9sZWU6MDIyMg==";

describe("PUT", () => {
  let authHeader = ''
  if (root_auth_scheme) {
    authHeader = "Authorization: " + root_auth_type + ' ' + root_auth_scheme + "\r\n";
  }

  // test("/put_test/new.html", async (done) => {
  //   const request =
  //     "PUT /put_test/new.html HTTP/1.1\r\n" +
  //     "Accept: */*\r\n" +
  //     "User-Agent: rawtester\r\n" +
  //     "Host: " + host + ":" + port + "\r\n" +
  //     "Content-Length: 16\r\n" +
  //     "Content-type: text/html\r\n" +
  //     authHeader +
  //     "\r\n" +
  //     "<p>New File</p> ";
  //   let res;
  //   try {
  //     res = parseResponse(await rawtest(host, port, request));
  //   } catch (err) {
  //     res = {};
  //   }
  //   expect(res.protocolVersion).toBe('HTTP/1.1');
  //   expect(res.statusCode === 201 || res.statusCode === 204).toBe(true);
  //   expect(res.headers['Content-Location']).tobe("/new.html");
  //   done();
  // });
  // test("/put_test/new2.html", async (done) => {
  //   const request =
  //     "PUT /put_test/new2.html HTTP/1.1\r\n" +
  //     "Accept: */*\r\n" +
  //     "User-Agent: rawtester\r\n" +
  //     "Host: " + host + ":" + port + "\r\n" +
  //     "Content-Length: 16\r\n" +
  //     "Content-type: text/html\r\n" +
  //     "\r\n" +
  //     "<p>hi</p> ";
  //   let res;
  //   try {
  //     res = parseResponse(await rawtest(host, port, request));
  //   } catch (err) {
  //     res = {};
  //   }
  //   expect(res.protocolVersion).toBe('HTTP/1.1');
  //   expect(res.statusCode === 201 || res.statusCode === 204).toBe(true);
  //   expect(res.headers['Content-Location']).tobe("/new.html");
  //   done();
  // });
  test("/put_test/hi", async (done) => {
    const request =
      "PUT /put_test/hi HTTP/1.1\r\n" +
      "Accept: */*\r\n" +
      "User-Agent: rawtester\r\n" +
      "Host: " + host + ":" + port + "\r\n" +
      "Content-Length: 9\r\n" +
      "Content-type: text/plain\r\n" +
      "\r\n" +
      "123456789 ";
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


// describe("DELETE", () => {
//     test("delete hi", async (done) => {
//         const request =
//           "DELETE /hi HTTP/1.1\r\n" +
//           "Accept: */*\r\n" +
//           "User-Agent: rawtester\r\n" +
//           "Host: " + host + ":" + port + "\r\n" +
//           authHeader +
//           "\r\n";
//         let res;
//         try {
//           res = parseResponse(await rawtest(host, port, request));
//         } catch (err) {
//           res = {};
//         }
//         writeLog("response_message.json", JSON.stringify(res));
//         expect(res.protocolVersion).toBe('HTTP/1.1');
//         expect(res.statusCode).toBe(405);
//         done();
//     });
// })