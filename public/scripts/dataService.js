(function(){
   function dataAccess($http, utils){
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
               var ship = response.data;
               ship.gradeClass = {};
               for(var prop in ship.grades){
                  ship.gradeClass[prop] = utils.bootstrap.gradeToClass(ship.grades[prop]);
               }

               var types = ship.weaponTypes;
               for(var prop in types){
                  types[prop].gradeClass = utils.bootstrap.gradeToClass(types[prop].grade);
                  types[prop].type = prop;
               }
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
      var mainPagePath = "/#!/main";
      var mainPageName = "Home";

      var setActiveNav = function(name){
         $("li.nav").removeClass("active");
         $("#nav-" + name).addClass("active");
      };

      var unsetActiveNav = function(){
         $("li.nav").removeClass("active");
      };

      return {
         setActiveNav: setActiveNav,
         unsetActiveNav : unsetActiveNav,
         mainPagePath: mainPagePath,
         mainPageName: mainPageName
      }
   }

   var app = angular.defaultModule();
   app.factory("data", dataAccess);
   app.factory("nav", navUtils)
}());
