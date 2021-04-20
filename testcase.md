### webserv testcase

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

3. **TRACE**

   - trace loop-back

     | Method  | Path       | Expect Response  | Else            |
     | ------- | ---------- | ---------------- | --------------- | 
     | TRACE   | trace_path | 200              | Specific header |

3. **OPTIONS**

   - options (63 ms (Google))

     | Method  | Path         | Expect Response  | Else                   |
     | ------- | ------------ | ---------------- | ---------------------- |
     | OPTIONS | options_path | 2xx              | default path: /options |
     | OPTIONS | /put_test    | 405              | Allow: not null        |
     | OPTIONS | /post_body   | 405              | Allow: not null        |
     | OPTIONS | /directory   | 405              | Allow: not null        |
     | OPTIONS | /rawtest     | 404              | Allow: not exist       |
     | OPTIONS | /rawtest2    | 404              | Allow: not exist       |