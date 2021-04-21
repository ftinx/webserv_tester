### webserv testcase

0. **HEAD**

   - valid path

     | Method  | Path    | Expect Response             |
     | ------- | ------- | --------------------------- |
     | HEAD    | /       | Equivalence with get header |

1. **GET**

   - valid path

     | Method  | Path    | Expect Response  | Else |
     | ------- | ------- | ---------------- | ---- |
     | GET     | /       | 200              |      |

   - invalid path

     | Method  | Path       | Expect Response  | Else |
     | ------- | ---------- | ---------------- | ---- |
     | GET     | /put_test  | 405              |      |
     | GET     | /post_body | 405              |      |
     | GET     | /rawtester | 404              |      |
     | GET     | /rawtester/sad/sadas/dasdasdas/das/das...(x74)  | 404              |      |
     | GET     | /rawtester/rawtesterrawtesterrawtester...(x650)  | 404              |      |

   - valid Http Request Header

     | Method  | Path    | Expect Response  | Else                | Output                  |
     | ------- | ------- | ---------------- | ------------------- | ----------------------- |
     | GET     | /       | 200              | Accept-Language: ko | Accept_Language_ko.html |
     | GET     | /       | 200              | Accept-Language: en | Accept_Language_en.html |
     | GET     | /       | 200              | Authorization       |                         |

   - invalid Http Request Header

     | Method  | Path    | Expect Response  | Else     |
     | ------- | ------- | ---------------- | -------- |
     | GET     | /       | 400              | no Host  |
     | GET     | /       | 400              | Host duplicate (1)|
     | GET     | /       | 400              | Host duplicate (2)|
     | GET     | /       | 400              | Host duplicate (3)|
     | GET     | /       | 400              | Host duplicate (4)|
     | GET     | /       | 401              | Authorization  (1)|
     | GET     | /       | 403              | Authorization  (2)|

   - MULTIPLE PORT

     | Method  | Path    | Expect Response  | Else          |
     | ------- | ------- | ---------------- | ------------- |
     | GET     | /       | 200              | multiple_port |

   - MULTIPLE PORT

     | Method  | Path      | Expect Response  | Else               |
     | ------- | --------- | ---------------- | ------------------ |
     | GET     | /redirect | 302              | location: not NULL |
     | GET     | /         | 301              | location           |

3. **POST**

4. **PUT/DELETE**

   - PUT (Specific header)

     | Method  | Path                         | Expect Response  | Else            |
     | ------- | ---------------------------- | ---------------- | --------------- |
     | PUT     | /put_test/rawtest.html       | 201              | Specific header      |
     | PUT     | /put_test/rawtest.html       | 201              | Idempotency          |
     | PUT     | /put_test/rawtest2.html      | 201              | Specific header      |
     | PUT     | /put_test/rawtest3           | 201              | Content-Length: 0    |
     | PUT     | /put_test/rawtest4           | 201              | Content-Length: 10   |
     | PUT     | /put_test/rawtest5           | 201              | Content-Length: 100  |
     | PUT     | /put_test/rawtest6           | 201              | Content-Length: 1000 |

   - DELETE

     | Method  | Path                         | Expect Response  | Else            |
     | ------- | ---------------------------- | ---------------- | --------------- |
     | PUT     | /put_test/rawtest.html       | 200              |                 |
     | PUT     | /put_test/rawtest.html       | 200              |                 |
     | PUT     | /put_test/rawtest2.html      | 200              |                 |
     | PUT     | /put_test/rawtest3           | 200              |                 |
     | PUT     | /put_test/rawtest4           | 200              |                 |
     | PUT     | /put_test/rawtest5           | 200              |                 |
     | PUT     | /put_test/rawtest6           | 200              |                 |
     | PUT     | /put_test/rawtest/...        | 404              |                 |
     | PUT     | /put_test/rawtest/...        | 404              |                 |
     | PUT     | /put_test/rawtest/...        | 404              |                 |

5. **TRACE**

   - trace loop-back (default path: /trace)

     | Method  | Path       | Expect Response  | Else             |
     | ------- | ---------- | ---------------- | ---------------- |
     | TRACE   | trace_path | 200              | Specific header  |
     | TRACE   | /          | 405              | Specific header  |
     | TRACE   | /put_test  | 405              | Specific header  |
     | TRACE   | /post_body | 405              | Specific header  |
     | TRACE   | /directory | 405              | Specific header  |
     | TRACE   | /rawtest   | 404              |                  |
     | TRACE   | /rawtest2  | 404              |                  |

6. **OPTIONS**

   - options (63 ms (Google), default path: /options)

     | Method  | Path         | Expect Response  | Else                   |
     | ------- | ------------ | ---------------- | ---------------------- |
     | OPTIONS | options_path | 2xx              | Allow: not null        |
     | OPTIONS | /            | 405              | Allow: not null        |
     | OPTIONS | /put_test    | 405              | Allow: not null        |
     | OPTIONS | /post_body   | 405              | Allow: not null        |
     | OPTIONS | /directory   | 405              | Allow: not null        |
     | OPTIONS | /rawtest     | 404              | Allow: not exist       |
     | OPTIONS | /rawtest2    | 404              | Allow: not exist       |
