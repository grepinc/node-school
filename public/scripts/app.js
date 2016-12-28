(function(){
   var app = angular.module("schoolAngularApp", ["ngRoute"]);

   app.config(function($routeProvider){
      $routeProvider.when("/main", {
         templateUrl: "views/main.html",
         controller: "MainController"
      }).when("/ship/:index", {
         templateUrl: "views/ship.html",
         controller: "shipController"
      }).otherwise({redirectTo: "/main"});

   });
}());
