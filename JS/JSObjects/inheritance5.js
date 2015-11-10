// GOAL: I want to see if you can extend a prototype and add functionality at once

// Note we can define the prototype before the constructor
Shoe.prototype = {
    putOn: function( ) { console.log("Shoe's on!"); }
} 

function Shoe( size, color ) { 
    this.size  = 2;
    this.color = color;
    this.loc   = "store";
}

function Boot( size ) { 
    // Note, this will "overridde the size in shoes constructor"
    this.size = size; 
}

/* You have to create a new instance of a shoe 
   To inherit the constructor 
   Rather than: Boot.prototype = Object.create( Shoe.prototype  );*/
Boot.prototype = Object.create( new Shoe() );

boot = new Boot();

console.log(boot);

boot.putOn();

console.log( "BOOT SIZE: " + boot.size ); 
boot.size = 11
console.log( "BOOT SIZE: " + boot.size ); 

console.log( "BOOT LOC: " +  boot.loc ); 

console.log( "BOOT SEX: " + boot.sex ); 
boot.sex = "male"
console.log( "BOOT SEX: " + boot.sex ); 
