const request = require("supertest");

describe("Test the root path", () => {
	test("It should response the GET method", done => {
		request("http://localhost:8080")
			.get("/")
			.then(res => {
				console.log(res.status);
				console.log(res.headers);
				console.log(res.text);
				expect(res.statusCode).toBe(200);
				done();
			});
	});
});
