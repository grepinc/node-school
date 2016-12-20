import Controller from "./controller.js";
import path from "path";

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
         res.send(ships[id]);
      });
   }
}

var ships = [
            {
               class : "Kastan",
               project: "1001",
               type : "Partol",
               weapons: [
                  {
                     type: "artilery",
                     name: "76mm gun",
                     count: 1
                  },
                  {
                     type : "AAA",
                     name : "Medium range AA missile",
                     count: 8
                  },
                  {
                     type : "AAA",
                     name: "30mm AA gun",
                     count: 2
                  }
               ]
            },
            {
               class : "Gradok",
               project: "1002",
               type : "ASW",
               weapons: [
                  {
                     type: "artilery",
                     name: "76mm gun",
                     count: 1
                  },
                  {
                     type : "ASW",
                     name : "320mm torpedo",
                     count: 4
                  },
                  {
                     type : "ASW",
                     name : "ASW rocket launcher",
                     count: 1
                  },
                  {
                     type : "AAA",
                     name: "30mm AA gun",
                     count: 2
                  },
                  {
                     type: "gun",
                     name: "14.5mm gun",
                     count: 2
                  }
               ]
            },
            {
               class : "Mirak",
               project: "1003",
               type : "Patrol",
               weapons: [
                  {
                     type: "artilery",
                     name: "76mm gun",
                     count: 1
                  },
                  {
                     type : "AAA",
                     name: "30mm AA gun",
                     count: 2
                  }
               ]
            }
         ];
