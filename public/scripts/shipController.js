(function(){
   var app = angular.module("schoolAngularApp");

   app.controller("shipController", function($scope, $routeParams, data){
      $scope.image = { height: 400 };
      $scope.index = $routeParams.index;
      data.getShip($scope.index).success(function(ship){
         $scope.data = ship;
      });
   });
}());