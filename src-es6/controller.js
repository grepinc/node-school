import chalk from "chalk";

export default class Controller {
   constructor(name){
      this.name = name;
      this.route = "/" + name;
   }

   onRequestReceived(req){
      console.log(chalk.blue("Request received ", req.url));
   }

   init(){}
}
