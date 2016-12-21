import Controller from "./controller.js";
import path from "path";
import { ships } from "./data.js";

export default class HomeController extends Controller {
   constructor(app) {
      super("");
      this.init(app);
   }

   init(app) {
      /*app.get(this.route, (req, res) => {
         this.onRequestReceived(req);
         res.sendFile(path.join(__dirname, "../public/index.html"));
      });*/

      app.get(this.route + "version", (req, res) => {
         this.onRequestReceived(req);
         res.send("0.0.1");
      });

      app.get(this.route + "api/ships/:id", (req, res) => {
         this.onRequestReceived(req);
         var id = req.params.id;
         if(id === "length"){
            res.send(ships.length.toString());
         }
         else {
            res.send(ships[id]);
         }
      });
   }
}
