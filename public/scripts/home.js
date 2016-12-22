(function(){
   var app = angular.module("schoolAngularApp")

   app.controller("MainController", function($scope, $http, data){
      var shipsCount = 1;
      data.getShipsCount().success(function(count){
         shipsCount = count;
      });

      $scope.message = "Hello Angular";
      $scope.index = 0;
      $scope.image = { height: 400 };

      $scope.next = function(){
         $scope.index = ($scope.index + 1) % shipsCount;
         data.getShip($scope.index).success(function(result){
            $scope.data = result;
         });
      };

      data.getVersion().success(function(result){
         $scope.version = result;
      });

      data.getShip($scope.index).success(function(result){
            $scope.data = result;
         });
   });
}());
