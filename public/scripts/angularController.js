(function(){
   var app = angular.module("schoolAngularApp")

   app.controller("angularController", function($scope, $location, data){
      $scope.message = "Hello Angular";

      data.getVersion().success(function(result){
         $scope.version = result;
      });
   });
}());
