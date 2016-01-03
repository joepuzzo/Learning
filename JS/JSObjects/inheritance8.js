// GOAL: Show how to call super constructors and functions 

function Shoe( size, color ) { 
    this.size = size
    this.color = color
    this.on    = false; 
    console.log("CONSTRUCTING SHOE!")
}

Shoe.prototype = {
    putOn: function( ) { 
        console.log("Shoe's on!"); 
        this.on = true; 
    }
} 


function Boot( size, color ) { 
    Shoe.call( this, size, color )
    console.log("CONSTRUCTING BOOT!");
}

// We need to set the boots prototype because we will not get it
// by simply callin the super constructor,
// Also note the importance of creating a new instace of Shoes prototype
// this way, we can reference the parent casses functions
Boot.prototype = Object.create( Shoe.prototype ); 

Boot.prototype.putOn = function() { 
    Shoe.prototype.putOn.call(this); 
    console.log(" and by that I mean BOOTS ON!");
}

// Create a new boot
var boot1 = new Boot( 10, "blue" );

// Tets to see if we have the put on function
boot1.putOn();

console.log(boot1);
console.log(JSON.stringify( boot1 ));
