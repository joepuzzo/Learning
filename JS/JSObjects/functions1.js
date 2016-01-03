// GOAL: Test what happens when we call a prototype funtion from another prototype function

// Note we can define the prototype before the constructor
// This is due to hoisting
Shoe.prototype.putOn = function( ) { 
    console.log("Shoe's on!"); 
}

Shoe.prototype.onOff = function() { 
    this.putOn();
    this.takeOff();
}

// This will not work :( 
test1 = new Shoe("green");
test1.onOff();

Shoe.prototype.takeOff = function() { 
    console.log("Shoe's off!");
}

function Shoe( color ) { 
    this.color = color
    console.log("CONSTRUCTING!!")
}

// This works!! 
test2 = new Shoe("green");
test2.onOff();


