var five = require("johnny-five");

var board, motor, led;

var valA, valB;
var prevA = 0;
var prevB = 0;
var count = 0;
var prev_count = 0;

board = new five.Board();

board.on("ready", function() {
  
  //console.log( "Sample Interval:",this.io.getSamplingInterval() );
  //this.io.setSamplingInterval(1);
  //this.samplingInterval( 9 );
  console.log( "Sample Interval:",this.io.getSamplingInterval() );

  // Create a new `motor` hardware instance.
  motor = new five.Motor({
    pin: 3
  });

  // Inject the motor and pot
  board.repl.inject({
    motor: motor,
  });

  // Create sensors
  var encoA = new five.Sensor({
    pin: 2, 
    type: "digital", 
  });
  var encoB = new five.Sensor({
    pin: 4, 
    type: "digital",
  });

 
  // log sensor data 
  /*encoA.on("change", function(val) {
    //console.log("READ", val, "From input 4");
    valA = val;
    updateA();
  });
  encoB.on("change", function(val) {
    //console.log("READ", val, "From input 4");
    valB = val; 
    //updateB(); 
  });*/

  // Read interval
  /*setInterval( function() { 
    var val = syncDigitalRead( board.io, 2 );
    console.log( val );
  }, 25 );*/

  board.digitalRead(2, function( val ) { 
    //console.log("READ", val, "From input 2");
    valA = val;
    updateA();
    //console.log( count );
  });

  board.digitalRead(4, function( val ) { 
    //console.log("READ", val, "From input 4");
    valB = val;
    updateB();
    //console.log( count );
  });

  // Set velocity sample interval
  var deltaT = 1000;
  /*var interval = setInterval(function () {
    // Calculate the change in pulses
    var cur_count = Math.abs( count );
    deltaC = cur_count - prev_count;  
    velocity = deltaC / 1;
    console.log( velocity, "pulses per second COUNT:", cur_count, cur_count > prev_count ? "forward" : "reverse" );
    prev_count = cur_count;
  }, deltaT );*/

});

/*function updateA() { 
  count++;
  //console.log( count );
  //prevA = valA;
}

function updateB() { 
  count++;
  //console.log( count );
  //prevB = valB;
}*/


function updateA( ) { 
  // If state change on A to high
  if( prevA == 0 && valA == 1 ) { 
    // If B is low and A is high
    if( valB == 0 ) { 
      count--;
    } else { 
      count++;
    }
  }
  prevA = valA;
  //count++;
}

function updateB() { 
  // If state change on B to low
  if( prevB == 1 && valB == 0 ) { 
    // If A is low and B is low
    if( valA == 0 ) { 
      count--;
    } else { 
      count++;
    }
  }
  prevB = valB;
}


function move( value ) {
    var speed     = 0;
    var maxrevspeed  = 74;
    var minrevspeed  = 185;
    var maxforspeed  = 254;
    var minforspeed  = 191;
    var maxpot    = 1024;
    var halfpot   = maxpot / 2;
    var off_range = 100;

    //console.log( "value:", value );
  
    // Pot is in first half
    if( value < halfpot - off_range ) { 
      speed = Math.floor( value / ( halfpot - off_range ) * ( minrevspeed - maxrevspeed ) );
      motor.forward( maxrevspeed + speed );
      //console.log( "SpeedReverse:", maxrevspeed + speed );
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
    /*speed = Math.floor( 255 * value / maxpot );
    console.log("Speed:", speed);
    motor.forward( speed );*/

}


function syncDigitalRead( aboard, n ) {

  //console.log( board.io.currentBuffer );

  var port = (aboard.currentBuffer[0] & 0x0F);
  var portValue = aboard.currentBuffer[1] | ( aboard.currentBuffer[2] << 7);

  for( var i = 0; i < 8; i++ ) { 
    var pinNumber = 8 * port + i;
    var pin = aboard.pins[pinNumber];
    var bit = 1 << i;

    if (pin && (pin.mode === aboard.MODES.INPUT)) {
      pin.value = (portValue >> (i & 0x07)) & 0x01;

      if (pin.value) {
        aboard.ports[port] |= bit;
      } else {
        aboard.ports[port] &= ~bit;
      }
      if( pinNumber == n ) { 
        return pin.value;
      }
    }
  }
}
