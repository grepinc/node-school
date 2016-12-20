var taskState = {
   pending : 0,
   completed : 1,
   failed : 2
}

export class Task {
   constructor(){
      this.state = taskState.pending;
      this.data = null;
      this.error = null;
      this.successHandlers = [];
      this.errorHandlers = [];
   }

   resolve(data) {
      this.data = data;
      this.state = taskState.completed;
      for(var i=0; i<this.successHandlers.length; ++i){
         this.successHandlers[i](data);
      }
   }

   reject(message) {
      this.state = taskState.failed;
      this.error = new TaskError(message);
      for(var i=0; i<this.errorHandlers.length; ++i){
         this.errorHandlers[i](error);
      }
   }

   success(successCallback){
      this.successHandlers.push(successCallback);
      if(this.state === taskState.completed) {
         successCallback(this.data);
      }
   }

   fail (failCallback){
      this.errorHandlers.push(failCallback);
      if(this.state === taskState.failed) {
         failCallback(this.error);
      }
   }
}

class TaskError {
   constructor(message){
      this.message = message;
   }
}
