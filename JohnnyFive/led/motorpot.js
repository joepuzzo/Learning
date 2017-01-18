var five = require("johnny-five");

var board, motor, led;

var valA, valB;
var prevA = 0;
var prevB = 0;
var count = 0;
var prev_count = 0;

board = new five.Board();

board.on("ready", function() {

  // Create a new `motor` hardware instance.
  motor = new five.Motor({
    pin: 3
  });

  // Create a new `potentiometer` hardware instance.
  potentiometer = new five.Sensor({
    pin: "A3",
    freq: 250,
  });

  // Inject the motor and pot
  board.repl.inject({
    motor: motor,
    pot: potentiometer
  });

  // Create sensors
  var encoA = new five.Sensor({
    pin: 2, 
    type: "digital", 
    freq: .1
  });
  var encoB = new five.Sensor({
    pin: 4, 
    type: "digital",
    freq: .1
  });

 
  // log sensor data 
  encoA.on("data", function(value) {
    valA = value;
    updateA();
  });
  encoB.on("data", function(value) {
    valB = value; 
    //updateB(); 
  });

  // "data" get the current reading from the potentiometer
  potentiometer.on("data", move ); 

  // Set velocity sample interval
  var deltaT = 1000;
  var interval = setInterval(function () {
    // Calculate the change in pulses
    var cur_count = Math.abs( count );
    deltaC = cur_count - prev_count;  
    velocity = deltaC / 1;
    console.log( velocity, "pulses per second COUNT:", cur_count );
    prev_count = cur_count;
  }, deltaT );

});

function updateA() { 
  // If state change on A to high
  if( prevA == 0 && valA == 1 ) { 
    // If B is low and A is high
    if( valB == 0 ) { 
      count--;
    } else { 
      count++;
    }
    /*if( count > Number.MAX_SAFE_INTEGER || count < Number.MIN_SAFE_INTEGER ) { 
      count = 0;
    }*/
    console.log( count );
  }
  prevA = valA;
}

/*function updateB() { 
  // If state change on B to low
  if( prevB == 1 && valB == 0 ) { 
    // If A is low and B is low
    if( valA == 0 ) { 
      count--;
    } else { 
      count++;
    }
    console.log( count );
  }
  prevB = valB;
}*/

function move( value ) {
    var speed     = 0;
    var maxrevspeed  = 124.5;
    var minrevspeed  = 0;
    var maxforspeed  = 252;
    var minforspeed  = 127.5;
    var maxpot    = 1024;
    var halfpot   = maxpot / 2;
    var off_range = 100;

    //console.log( "value:", value );
  
    // Pot is in first half
    if( value < halfpot - off_range ) { 
      speed = Math.floor( value / ( halfpot - off_range ) * ( maxrevspeed - minrevspeed ) );
      motor.forward( maxrevspeed - speed );
      //console.log( "SpeedReverse:", maxrevspeed - speed );
    } 
    // Pot is in second half
    else if( value > halfpot + off_range ) { 
      value = halfpot - ( value % halfpot);
      speed = Math.floor( value / ( halfpot - off_range ) * ( maxforspeed - minforspeed) );
      motor.forward( maxforspeed - speed );
      //console.log( "SpeedForward:", maxforspeed - speed );
    }
    else { 
      speed = 0; 
      motor.stop();
      //console.log( "STOP!");
    }

}



