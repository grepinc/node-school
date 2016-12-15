var app = require("./app.js");
var http = require("http");
var express = require("express");
var controllers = require("./controllers");
var chalk = require("chalk");

var application = express();

controllers.init(application);

var server = http.createServer(application);

server.listen(app.config.port);

console.log(chalk.green("Server started listening at port", app.config.port));
