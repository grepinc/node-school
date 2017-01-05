(function(){
   var bootstrap = {
      gradeToClass: function(level){
         switch(level){
            case 1: return "success";
            case 2: return "warning";
            case 3: return "danger";
            default: return "default";
         }
      }
   }

   var utils = function() {
      return {
         bootstrap: bootstrap
      };
   }

   var app = angular.defaultModule();
   console.log("Registar utils");
   app.factory("utils", utils);
}());
