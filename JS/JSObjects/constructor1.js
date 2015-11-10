// GOAL: Test what happens when we call constructor without new


// Note we can define the prototype before the constructor
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
