(function(){
   function dataAccess($http){
      var http = $http;
      var ships = {};
      var props = { version: null, shipsCount: null };
      var shipsCount = null;
      var version = null;

      function getShip(index){
         var task = new Task();

         if(ships[index]) {
            task.resolve(ships[index]);
         }
         else {
            http.get("api/ships/"+index).then(function(response){
               ships[index] = response.data;
               task.resolve(response.data);
            });
         }

         return task;
      }

      function getShipsCount(){
         return getProperty("shipsCount", "/api/ships/length");
      }

      function getVersion(){
         return getProperty("version", "/version");
      }

      function getProperty(name, url) {
         var task = new Task();
         if(props[name] !== null){
            task.resolve(props[name]);
         }
         else {
            http.get(url).then(function(response){
               props[name] = response.data;
               task.resolve(response.data);
            });
         }
         return task;
      }

      return {
         getShip: getShip,
         getShipsCount: getShipsCount,
         getVersion: getVersion
      }
   }

   var app = angular.module("schoolAngularApp");
   app.factory("data", dataAccess);
}());
