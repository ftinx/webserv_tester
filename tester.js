const { Socket } = require("net");

const port = 8080;

const client = new Socket();

client.connect(port, 'localhost', () => { // 1. connect to server
  console.log(`[client] connected`);

  // const request = [
  //   'GET / HTTP/1.1',
  //   'Accept: */*',
  //   'User-Agent: my-test-agent',
  //   'Host: localhost:' + port,
  //   '',
  //   '',
  // ].join('\r\n');

  const request =
    'GET / HTTP/1.1\r\n'
    + 'Accept: */*\r\n'
    + 'User-Agent: my-test-agent\r\n'
    + 'Host: localhost:' + port + '\r\n'
    + '\r\n'
    + '\r\n';

  client.write(request); // 3. request to server
});

client.on('data', serverData => { // 6. receive the response from server
  console.log(`[client] received data from server:`);
  // console.log(serverData.toString().split('\r\n'));
  console.log(serverData.toString())
  client.destroy();
});

client.on('close', () => {
  console.log(`[client] connection closed`);
});
