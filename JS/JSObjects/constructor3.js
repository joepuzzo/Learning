// GOAL: Test what happens when we put default value in prototype
// and we create two of them

// Note we can define the prototype before the constructor
// This is due to hoisting
Shoe.prototype = {
    size: 7,
    putOn: function( ) { console.log("Shoe's on!"); }
} 
function Shoe( color ) { 
    this.color = color
    console.log("CONSTRUCTING!!")
}

test1 = new Shoe("green");
test2 = new Shoe("green");
test2.size = 8; 
console.log( test1.size );
console.log( test2.size );


