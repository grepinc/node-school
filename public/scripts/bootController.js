(function(){
   var app = angular.module("schoolAngularApp");
   var name = "bootstrap";

   app.controller("bootController", function($scope, nav){
      nav.setActiveNav(name);
   });
}());
