var config = require("./config.js");
var http = require("http");
var express = require("express");

var app = express();

app.get("/", function(req, res){
   res.send(req.url);
});

app.get("/info", function(req, res){
   res.set("Content-Type", "application/json");
   res.send({ name: config.appName, version: config.version });
});

var server = http.createServer(app);

server.listen(config.port);
