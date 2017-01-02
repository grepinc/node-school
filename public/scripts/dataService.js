(function(){
   function dataAccess($http){
      var http = $http;
      var ships = {};
      var props = { version: null, shipsCount: null, ships: null };
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

      function getShips(){
         return getProperty("ships", "/api/ships", function(ships){
            for(var i=0; i < ships.length; ++i){
               ships[i].index = i;
            }
         });
      }

      function getShipsCount(){
         return getProperty("shipsCount", "/api/ships/length");
      }

      function getVersion(){
         return getProperty("version", "/version");
      }

      function getProperty(name, url, onfetch) {
         var task = new Task();
         if(props[name] !== null){
            task.resolve(props[name]);
         }
         else {
            http.get(url).then(function(response){
               props[name] = response.data;
               if(onfetch){
                  onfetch(props[name]);
               }
               task.resolve(response.data);
            });
         }
         return task;
      }

      return {
         getShip: getShip,
         getShipsCount: getShipsCount,
         getVersion: getVersion,
         getShips: getShips
      }
   }

   function navUtils(){
      var setActiveNav = function(name){
         $("li.nav").removeClass("active");
         $("#nav-" + name).addClass("active");
      };

      var unsetActiveNav = function(){
         $("li.nav").removeClass("active");
      };

      return {
         setActiveNav: setActiveNav,
         unsetActiveNav : unsetActiveNav
      }
   }

   var app = angular.module("schoolAngularApp");
   app.factory("data", dataAccess);
   app.factory("nav", navUtils)
}());
