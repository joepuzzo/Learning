var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var counter   = new five.Sensor.Digital(2);
  var direction = new five.Sensor.Digital(4);
  
  counter.on("change", function(value) {
    console.log("Count:",value);
  });

  direction.on("change", function(value) {
    console.log("Direc:",value);
  });

});
