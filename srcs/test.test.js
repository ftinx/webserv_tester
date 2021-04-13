const { rawtest, writeLog, parseResponse } = require("./rawtester.js");

const host = "localhost";
const port = 8080;

describe("GET", () => {
    test("GET /", async (done) => {
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
        writeLog("response_message.json", JSON.stringify(res));
        expect(res.protocolVersion).toBe('HTTP/1.1');
        expect(res.statusCode).toBe(200);
        done();
    });
    test("GET /", async (done) => {
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
        writeLog("response_message.json", JSON.stringify(res));
        expect(res.protocolVersion).toBe('HTTP/1.1');
        expect(res.statusCode).toBe(200);
        done();
    });
});