
/* === Method-1 We define everything in the constructor === */

// Note I had to call this Shoe1 and not Shoe because if 
// both methods in this file had the same name the second
// verstion would overide the first

// Shoe constructor
function Shoe1( size, color ) { 
    this.size = size
    this.color = color
    this.putOn = function( ) { console.log("Shoe's on!"); }
}

// Now create a new shoe object
test1 = new Shoe1( 8, "green");
test1.putOn();

console.log("\nMethod1 - all in constructor:");
console.log( test1 );
console.log("\n")

/* === Method-2 We define shared things in the prototype === */

// Note we can define the prototype before the constructor because the constructor is hoisted
Shoe.prototype = {
    putOn: function( ) { console.log("Shoe's on!"); }
} 

// Shoe constructor
function Shoe( size, color ) { 
    this.size = size;
    this.color = color;
}

// Now create a new shoe object
test2 = new Shoe( 10, "blue");
test2.putOn();

console.log("\nMethod2 - using prototype:");
console.log( test2 );
console.log("\n")


