var app = angular.module("schoolAngularApp", [])

app.controller("MainController", function($scope, $http){
   var data = new DataAccess($http);
   var shipsCount = 1;
   data.getShipsCount().success(function(count){
      shipsCount = count;
   });

   $scope.message = "Hello Angular";
   $scope.index = 0;
   $scope.image = {
      src: "Img1.jpg",
      height:400
   };

   $scope.next = function(){
      var image = $scope.image;
      $scope.index = ($scope.index + 1) % shipsCount;
      image.src = "Img" + ($scope.index + 1) + ".jpg";
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
