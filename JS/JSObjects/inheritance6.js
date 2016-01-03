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
Boot.prototype = Object.create( new Shoe(3,"green") );

// This will only call boots constructor
boot = new Boot();

// this will log the object { size: undefined }
console.log(boot);

// The boot will have this function!
boot.putOn();

// Size will be undefined because the size in the boot constructor is undefined
console.log( "BOOT SIZE: " + boot.size ); 
boot.size = 11
console.log( "BOOT SIZE: " + boot.size ); 

// Color will be defined because it was called in the Shoe constructor!
console.log( "BOOT COLOR: " +  boot.color ); 

// Loc will be defined because it is set in the Shoe Class
console.log( "BOOT LOC: " +  boot.loc ); 

// Sex is not part of either 
console.log( "BOOT SEX: " + boot.sex ); 
boot.sex = "male"
console.log( "BOOT SEX: " + boot.sex ); 
