function DataAccess(http){
   this.http = http;
   this.ships = {};
   this.shipsCount = null;
   this.version = null;
}

DataAccess.prototype.getShip = function(index) {
   var task = new Task();

   if(this.ships[index]) {
      task.resolve(this.ships[index]);
   }
   else {
      var self = this;
      this.http.get("api/ships/"+index).then(function(response){
         self.ships[index] = response.data;
         task.resolve(response.data);
      });
   }

   return task;
}

DataAccess.prototype.getShipsCount = function() {
   return this.getProperty("shipsCount", "/api/ships/length");
}

DataAccess.prototype.getVersion = function() {
   return this.getProperty("version", "/version");
}

DataAccess.prototype.getProperty = function(name, url) {
   var task = new Task();
   if(this[name] !== null){
      task.resolve(this[name]);
   }
   else {
      var self = this;
      this.http.get(url).then(function(response){
         self[name] = response.data;
         task.resolve(response.data);
      });
   }
   return task;
}
