const { findAvailablePort } = require("./10.free-port");
const http = require("node:http");

const envPort = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200; // OK
    res.setHeader("Content-Type", "text/plain");
    res.end("Hola mundo");
  }
};

const server = http.createServer(processRequest);

server.listen(envPort, () => {
    console.log(`Server listen on PORT http://localhost:${envPort}`);
});

findPort(envPort);
