const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Hello world<h1/>");
  } else if (req.url === "/about") {
    res.end("<h1>About page<h1/>");
  }
});

server.listen(3000, () => {
  console.log("Hosted");
});
