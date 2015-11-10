// GOAL: I want to see what happens when the constructor calls a function that
// Only exists in the prototype

// Note we can define the prototype before the constructor
Shoe.prototype = {
    putOn: function( ) { console.log("Shoe's on!"); }
} 

function Shoe( size, color ) { 
    this.size = size;
    this.color = color;
    putOn();
}

// This will def work
test3 = new Shoe( 10, "blue");
test3.putOn();
