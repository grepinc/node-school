import { Task } from "./task.js";
import chalk from "chalk";
import express from "express";
import config from "./config.js";
import path from "path";

console.log(chalk.green("Starting..."));
var app = express();

app.use(express.static(path.join(__dirname, "../public")));

import HomeController from "./homeController.js";
var homeController = new HomeController(app);

app.listen(config.port, (err) => {
   console.log(chalk.green("Started"));
});
