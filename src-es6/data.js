export var ships = [
            {
               img: "Img1.jpg",
               images: [],
               description: "Small patrol boat concept",
               quote: "...small, fast, and ready to fight...",
               class : "Kastan",
               project: "1001",
               type : "Partol",
               status: "Design",
               displacement: 600,
               range: 2500,
               endurance: 15,
               speed: 30,
               length: 55,
               beam: 10,
               grades: {
                  size: 3,
                  endurance: 2,
                  weapons: 3,
                  overall: 3
               },
               weaponTypes: {
                  artilery: {
                     grade: 2,
                     note: "76mm"
                  },
                  antiAir: {
                     grade: 2,
                     note: "tactical"
                  },
                  ASW: {
                     grade: 3,
                     note: "none"
                  },
                  antiShip: {
                     grade: 3,
                     note: "none"
                  },
                  strategic: {
                     grade: 3,
                     note: "none"
                  }
               },
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
               img: "Img2.jpg",
               images: [],
               description: "Small ASW and patrol corvette concept",
               quote: "...looking good, fighting good...",
               class : "Gradok",
               project: "1002",
               type : "ASW",
               status: "Design",
               displacement: 800,
               range: 2500,
               endurance: 15,
               speed: 30,
               length: 65,
               beam: 10,
               grades: {
                  size: 3,
                  endurance: 2,
                  weapons: 2,
                  overall: 2
               },
               weaponTypes: {
                  artilery: {
                     grade: 2,
                     note: "76mm"
                  },
                  antiAir: {
                     grade: 2,
                     note: "tactical"
                  },
                  ASW: {
                     grade: 1,
                     note: "torpedos, launcher, helicopter"
                  },
                  antiShip: {
                     grade: 3,
                     note: "none"
                  },
                  strategic: {
                     grade: 3,
                     note: "none"
                  }
               },
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
                     type: "machingun",
                     name: "14.5mm gun",
                     count: 2
                  }
               ]
            },
            {
               img: "Img3.jpg",
               images: [],
               description: "Small patrol boat concept",
               quote: "...lightly armed, but does the job...",
               class : "Mirak",
               project: "1003",
               type : "Patrol",
               status: "Design",
               displacement: 600,
               range: 2500,
               endurance: 15,
               speed: 30,
               length: 55,
               beam: 10,
               grades: {
                  size: 3,
                  endurance: 2,
                  weapons: 3,
                  overall: 3
               },
               weaponTypes: {
                  artilery: {
                     grade: 2,
                     note: "76mm"
                  },
                  antiAir: {
                     grade: 2,
                     note: "tactical"
                  },
                  ASW: {
                     grade: 3,
                     note: "none"
                  },
                  antiShip: {
                     grade: 3,
                     note: "none"
                  },
                  strategic: {
                     grade: 3,
                     note: "none"
                  }
               },
               weapons: [
                  {
                     type: "artilery",
                     name: "76mm gun",
                     count: 1
                  },
                  {
                     type : "AAA",
                     name: "AK630 30mm AA gun",
                     count: 2
                  }
               ]
            },
            {
               img: "Img4.jpg",
               images: [],
               description: "Medium sized patrol corvette and strategic missile carrier",
               quote: "...redefines the idea of a corvette...",
               class : "Buyan-M",
               project: "21631",
               type : "Multirole corvette",
               status: "In service",
               displacement: 950,
               range: 2300,
               endurance: 10,
               speed: 26,
               length: 75,
               beam: 11,
               grades: {
                  size: 2,
                  endurance: 3,
                  weapons: 2,
                  overall: 2
               },
               weaponTypes: {
                  artilery: {
                     grade: 1,
                     note: "100mm"
                  },
                  antiAir: {
                     grade: 2,
                     note: "tactical"
                  },
                  ASW: {
                     grade: 3,
                     note: "none"
                  },
                  antiShip: {
                     grade: 1,
                     note: "Kalibar-NK"
                  },
                  strategic: {
                     grade: 1,
                     note: "Kalibar-NK"
                  }
               },
               weapons: [
                  {
                     type: "artilery",
                     name: "A190 100mm gun",
                     count: 1
                  },
                  {
                     type : "strategic",
                     name : "Kalibar NK cruise missile",
                     count: 8,
                     comment: "main"
                  },
                  {
                     type : "AAA",
                     name : "Komar short range AA missile",
                     count: 8
                  },
                  {
                     type : "AAA",
                     name: "AK630M2 30mm AA gun",
                     count: 1
                  },
                  {
                     type: "machine gun",
                     name: "14.5mm machine gun",
                     count: 2
                  },
                  {
                     type: "machine gun",
                     name: "7.62mm machine gun",
                     count: 3
                  }
               ]
            },
            {
               img: "Img5.jpg",
               images: ["Img5.jpg", "Img5-2.jpg", "Img5-3.jpg", "Img5-4.jpg"],
               description: "Very large prospective stealth multirole corvette",
               quote: "...trully a ship of the future...",
               class : "Derzky",
               project: "20386",
               type : "Multirole corvette",
               status: "Building",
               displacement: 3400,
               range: 5000,
               endurance: 30,
               speed: 30,
               length: 109,
               beam: 13,
               grades: {
                  size: 1,
                  endurance: 1,
                  weapons: 1,
                  overall: 1
               },
               weaponTypes: {
                  artilery: {
                     grade: 1,
                     note: "100mm"
                  },
                  antiAir: {
                     grade: 1,
                     note: "area"
                  },
                  ASW: {
                     grade: 1,
                     note: "torpedos, helicopter"
                  },
                  antiShip: {
                     grade: 1,
                     note: "Kalibar-NK"
                  },
                  strategic: {
                     grade: 1,
                     note: "Kalibar-NK"
                  }
               },
               weapons: [
                  {
                     type: "artilery",
                     name: "A190 100mm gun",
                     count: 1
                  },
                  {
                     type : "strategic",
                     name : "Kalibar NK cruise missile",
                     count: 8,
                     comment: "main"
                  },
                  {
                     type : "AAA",
                     name : "Redut medium range AA missile",
                     count: 16
                  },
                  {
                     type : "AAA",
                     name: "AK630 30mm AA gun",
                     count: 2
                  },
                  {
                     type: "ASW",
                     name: "Paket NK torpedo",
                     count: 8
                  }
               ]
            },
            {
               img: "Img6.jpg",
               images: [],
               class : "Gremyashchiy",
               quote: "...essencially a light frigate...",
               description: "Large ocean-going multirole corvette",
               project: "20385",
               type : "Multirole corvette",
               status: "Building",
               displacement: 2200,
               range: 3800,
               endurance: 15,
               speed: 26,
               length: 104,
               beam: 11,
               grades: {
                  size: 1,
                  endurance: 2,
                  weapons: 1,
                  overall: 1
               },
               weaponTypes: {
                  artilery: {
                     grade: 1,
                     note: "100mm"
                  },
                  antiAir: {
                     grade: 1,
                     note: "area"
                  },
                  ASW: {
                     grade: 1,
                     note: "torpedos, helicopter"
                  },
                  antiShip: {
                     grade: 1,
                     note: "Kalibar-NK"
                  },
                  strategic: {
                     grade: 1,
                     note: "Kalibar-NK"
                  }
               },
               weapons: [
                  {
                     type: "artilery",
                     name: "A190 100mm gun",
                     count: 1
                  },
                  {
                     type : "strategic",
                     name : "Kalibar NK cruise missile",
                     count: 8,
                     comment: "main"
                  },
                  {
                     type : "AAA",
                     name : "Redut medium range AA missile",
                     count: 16
                  },
                  {
                     type : "AAA",
                     name: "AK630 30mm AA gun",
                     count: 2
                  },
                  {
                     type: "ASW",
                     name: "Paket NK torpedo",
                     count: 8
                  },
                  {
                     type: "machine gun",
                     name: "14.5mm machine gun",
                     count: 2
                  }
               ]
            }
         ];
