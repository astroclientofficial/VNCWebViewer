var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app);

var port = 9200;
app.set("port", port);

app.use(express.static("public"));

server.listen(port);

server.on("listening", function() {
  console.log("Listening on port: " + port);
});

server.on("error", function(error) {
  console.log(error);
});
