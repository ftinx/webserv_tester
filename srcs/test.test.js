const { rawtest, writeLog, parseResponse } = require("./rawtester.js");

const port = 8080;
const multiple_port = 8081;
const host = "localhost";
const root_auth_type = "Basic";
const root_auth_scheme = "";

describe("GET invalid Http Request Header", () => {
	let authHeader = ''
	if (root_auth_scheme) {
		authHeader = "Authorization: " + root_auth_type + ' ' + root_auth_scheme + "\r\n";
	}
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
})
