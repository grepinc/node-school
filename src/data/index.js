(function(data){
   var Task = require("../task.js");

   data.getData = function(){
      var task = new Task();

      setTimeout(function(){
         task.resolve({ name: "Krešo" });
      }, 500);

      return task;
   };
}(module.exports));
