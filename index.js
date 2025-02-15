const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/cars") {
    res.end("cars page");
  } else if (req.url == "/fruits") {
    res.end("fruits page");
  } else {
    res.end("Hello from the server!");
  }
});

server.listen(8000, "localhost", () => {
  console.log("server started");
});
