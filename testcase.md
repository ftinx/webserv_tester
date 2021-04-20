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
     | GET     | /rawtester/sad/sadas/dasdasdas/das/dasd/asd/asdasd/asd/sad/sa/das/das/ddsa  | 404              |      |
     | GET     | /rawtester/rawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtesterrawtester  | 404              |      |

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
