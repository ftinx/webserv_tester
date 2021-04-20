const { rawtest, writeLog, parseResponse } = require("./rawtester.js");

const port = 8080;
const multiple_port = 8081;
const host = "localhost";
const root_auth_type = "Basic";
const root_auth_scheme = "aG9sZWU6MDIyMg==";

describe("GET", () => {
	let authHeader = ''
	if (root_auth_scheme) {
		authHeader = "Authorization: " + root_auth_type + ' ' + root_auth_scheme + "\r\n";
	}
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
})
