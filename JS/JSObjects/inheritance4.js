// GOAL: I want to see what happens when the constructor calls a function that
// Only exists in the prototype

// Note we can define the prototype before the constructor
Shoe.prototype = {
    putOn: function( ) { 
        console.log("Shoe's on!"); 
    },
    tie: function() { 
    } 
} 

Shoe.prototype.polish = function( shine ) { 

}; 

function Shoe( size, color ) { 
    this.size = size;
    this.color = color;
    this.putOn();
}

// This will work!
test3 = new Shoe( 10, "blue");
test3.putOn();
