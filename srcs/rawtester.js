const fs = require('fs');
const { Socket } = require("net");
const { PromiseSocket } = require("promise-socket");

function parseResponse(res) {
  var response = {}
  lines = res.split(/\r?\n/);

  /* parse status line */
  let statusLine = lines.shift();
  response = {...parseStatusLine(statusLine)};

  /* parse headers */
  let headerLines = []
  while (lines.length !== 0) {
    let line = lines.shift();
    if (line == "")
      break;
    headerLines.push(line);
  }

  /* make response */
  response = {
    ...response,
    "headers": parseHeaders(headerLines),
    "body": lines.join('\r\n')
  }

  return (response);

  function parseStatusLine(statusLine) {
    parseLine = statusLine.match(/^(.+) ([0-9]{3}) (.*)$/);
    return ({
      'protocolVersion': parseLine[1],
      'statusCode': parseInt(parseLine[2]),
      'statusMessage': parseLine[3]
    })
  }
  
  function parseHeaders(headerLines) {
    let headers = {};
    for (line of headerLines) {
      parseHeaders = line.split(':');
      headers[parseHeaders.shift().toLowerCase()] = parseHeaders.join(':').trim();
    }
    return (headers);
  }
}

async function rawtest(host, port, request) {
  const client = new Socket();
  const promiseSocket = new PromiseSocket(client)

  messageLog('\n---------------------------------------------------------------------------\n' + request);
  await promiseSocket.connect(port, host);
  await promiseSocket.write(request);
  promiseSocket.end();
  const response = await promiseSocket.readAll();
  messageLog('\n###########################################################################\n' + response);
  promiseSocket.destroy()
  return (response.toString());
}
 
function writeLog(filename, log) {
  fs.writeFile(filename, log, 'utf8', function (err, fd) { 
    if (err) 
      throw '[ERR] FILE WRITE: ' + fd + ' ' + err;
  });
}

function messageLog(log) {
  fs.appendFile("http_response.log", log, (err) => {
    if (err) 
      throw '[ERR] FILE WRITE: response message ' + err;
  });
}

module.exports.rawtest = rawtest;
module.exports.writeLog = writeLog;
// module.exports.messageLog = messageLog;
module.exports.parseResponse = parseResponse;
