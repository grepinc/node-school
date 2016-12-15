(function(homeController){
   var app = require("../app.js");

   homeController.init = function(server){
      server.get("/", function(req, res) {
         res.send("Home");
      });

      server.get("/info", function(req, res){
         res.set("Content-Type", "application/json");
         res.send({ name: app.config.appName, version: app.config.version });
      });

      server.get("/data", function(req, res){
         var task = app.data.getData();
         task.success(function(data) {
            res.set("Content-Type", "application/json");
            res.send(data);
         });
      });
   }
}(module.exports));
