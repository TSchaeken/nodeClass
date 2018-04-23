const http = require("http");

const PORT = 7000;
const PORT2 = 7500;

const handleRequest = (req, res) => {
  res.end("Come here");
  console.log(req.headers.host);
};

const handleRequest2 = (req, res) => {
  res.end("Go away");
};

const server = http.createServer(handleRequest);

const server2 = http.createServer(handleRequest2);

server.listen(PORT, function() {
  console.log("Nice server listening on: " + PORT);
});

server2.listen(PORT2, function() {
  console.log("Mean server listening on: " + PORT2);
});
