var Jools = require('../lib/jools');

var rules = [
  {
    "name": "Check temperature",
    "condition": 
      function(type, temperature) {
        return type == "living" && temperature > 20 || 
          type == "passing" && temperature > 15;
      }
    ,
    "consequence": 
      function(name) {
        this.tooWarm = true;
      }
  },
  {
    "name": "Turn heater off",
    "condition": 
      function(tooWarm) {
        return tooWarm;
      }
    ,
    "consequence": 
      function(name) {
        console.log("Turn heater off in room: "+name);
      }
  }
];

var lounge =  {
  "name": "lounge",
  "temperature": 21,
  "type": "living"
};

var hall = {
  "name": "hall",
  "temperature": 16,
  "type": "passing"
};

var j = new Jools(rules);
j.execute(lounge);
j.execute(hall);
