// the notifier to send the notification
const notifier = require("node-notifier");
// stuff to create a simple http server
const http = require("http");
const process = require("process");
const url = require("url");

// get the server variables
const host = "localhost";
const port = process.env.PORT || 16333;

// the server listener
const requestListener = function (req, res) {
  const queryObject = url.parse(req.url, true).query;
  console.log(`Incoming message: ${queryObject.summary} / ${queryObject.body}`);

  notifier.notify({
    title: queryObject.summary,
    message: queryObject.body,
  });

  res.writeHead(200);
  res.end("{'ok': true}");
};

// start the server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
