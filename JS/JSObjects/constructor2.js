// GOAL: Test what happens when we put default value in prototype


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

test = new Shoe("green");
// This will only print out the color because size is now in the prototype
console.log( test );
// But the valeu is still set
console.log( test.size );
