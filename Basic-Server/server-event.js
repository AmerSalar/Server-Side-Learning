const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Hey this is event of server...");
});

server.listen(3000);
