(function(apiController){
   var app = require("../app.js");

   apiController.init = function(server){
      server.get("/api/notes/:name", function(req, res) {
         var name = req.params.name;
         res.send({"name" : name});
      });

      server.get("/api/notes/", function(req, res) {
         res.send("Notes");
      });
   }
}(module.exports));
