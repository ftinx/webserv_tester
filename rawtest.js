const { Socket } = require("net");
const { PromiseSocket } = require("promise-socket");

// function rawtest(host, port, request) {
//   const client = new Socket();
// //   const promiseSocket = new PromiseSocket(client)
//   var response = "";
//   client.connect(port, host, () => {
//     client.write(request); 
//   });
//   client.on("data", (serverData) => {
//     response = serverData.toString();
//     client.destroy();
//   });
//   client.on("close", () => {});
//   return (response);
// }

async function rawtest(host, port, request) {
    const client = new Socket();
    const promiseSocket = new PromiseSocket(client)

    await promiseSocket.connect(port, host);
    await promiseSocket.write(request);
    promiseSocket.end();
    const response = await promiseSocket.readAll();
    // await promiseSocket.end()
    // console.log(response.toString());
    return (response.toString());
  }

  
module.exports = rawtest;
