function helloWorld() {
  return "Hello world!";
}

function helloName( name ) { 
  return "Hello " + name;
}

function gimmeANumber() { 
    var max = 2000;
    var min = 2;
    var pos;
    do { 
         pos = Math.floor( Math.random() * (max - min) + min );
    } while( pos % 2 !== 0 ) 
    return pos;
}
