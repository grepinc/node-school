var app = angular.module("schoolAngularApp", [])

app.controller("MainController", function($scope, $http){
   $scope.message = "Hello Angular";
   $scope.image = {
      index: 0,
      src: "Img1.jpg",
      height:400
   };

   $scope.next = function(){
      var image = $scope.image;
      image.index = (image.index + 1) % 3;
      image.src = "Img" + (image.index + 1) + ".jpg";
   };

   $scope.showDetails = function(){
      var index = $scope.index;
      $http.get("api/ships/"+index).then(function(response){

      });
   }

   $http.get("/version").then(function(response){
      $scope.version = response.data;
   });
});
