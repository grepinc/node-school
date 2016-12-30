(function(){
   var app = angular.module("schoolAngularApp")

   app.controller("MainController", function($scope, $location, data){
      $scope.index = 0;
      $scope.image = { height: 100 };

      $scope.showDetails = function(index) {
         $location.path("/ship/"+index);
      }

      data.getShips().success(function(ships){
         $scope.ships = ships;
      });
   });
}());
