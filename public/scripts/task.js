var taskState = {
   pending : 0,
   completed : 1,
   failed : 2
}

function TaskError(message){
   this.message = message;
}

function Task(){
   this.state = taskState.pending;
   this.data = null;
   this.error = null;
   this.successHandlers = [];
   this.errorHandlers = [];
}

Task.prototype.resolve = function(data) {
   this.data = data;
   this.state = taskState.completed;
   for(var i=0; i<this.successHandlers.length; ++i){
      this.successHandlers[i](data);
   }
}

Task.prototype.reject = function(message) {
   this.state = taskState.failed;
   this.error = new TaskError(message);
   for(var i=0; i<this.errorHandlers.length; ++i){
      this.errorHandlers[i](error);
   }
}

Task.prototype.success = function(successCallback){
   this.successHandlers.push(successCallback);
   if(this.state === taskState.completed) {
      successCallback(this.data);
   }
}

Task.prototype.fail = function(failCallback){
   this.errorHandlers.push(failCallback);
   if(this.state === taskState.failed) {
      failCallback(this.error);
   }
}
