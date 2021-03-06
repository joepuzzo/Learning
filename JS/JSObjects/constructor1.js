// GOAL: Test what happens when we call constructor without new


// Note we can define the prototype before the constructor
// This is due to hoisting
Shoe.prototype = {
    putOn: function( ) { console.log("Shoe's on!"); }
} 
function Shoe( size, color ) { 
    this.size = size
    this.color = color
    console.log("CONSTRUCTING!!")
}

// This will def work
test = Shoe( 10, "blue");
console.log( test );

// Versus using the new keyword
testnew = new Shoe(10, "green");
console.log( testnew );
