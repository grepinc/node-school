(function(){
   var app = angular.module("schoolAngularApp");
   var name = "angular";

   app.controller("angularController", function($scope, $location, data, nav){
      nav.setActiveNav(name);
      $scope.nav = nav;

      $scope.message = "Hello Angular";

      data.getVersion().success(function(result){
         $scope.version = result;
      });
   });
}());
