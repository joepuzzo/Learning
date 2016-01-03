// GOAL: I want to see if you can access private vars from within prototype

function Shoe( size, color ) { 
    this.size  = 2;
    this.color = color;
    this.loc   = "store";
}

Shoe.prototype.putOn = function( ) { 
    console.log("Shoe's on!"); 
}

function Boot( size ) { 
    Shoe.call( this, size, "brown" );
    var test = 3;
}

Boot.prototype = Object.create( Shoe.prototype );

Boot.prototype.printTest = function() { 
    console.log( test );
}

boot = new Boot( 4 );
console.log(boot);
boot.putOn();
boot.printTest();

