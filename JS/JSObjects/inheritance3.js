
/* === Method-1 We define everything in the constructor === */

// Note I had to call this Shoe1 and not Shoe because if 
// both methods in this file had the same name the second
// verstion would overide the first

// Shoe constructor
function Shoe1( size, color ) { 
    this.size = size
    this.color = color
    this.some_const = 10
    this.putOn = function(){ console.log("shoes on!"); };
}

// Now create a new shoe object
test1 = new Shoe1( 8, "green");

console.log("\nMethod1 - all in constructor:");
console.log("The object: ")
console.log( test1 );
console.log("The constant: ")
console.log( test1.some_const );
console.log("\n")


/* === Method-2 We define shared things in the prototype === */

// Note we can define the prototype before the constructor because the constructor is hoisted
Shoe.prototype = {
    some_const: 20,
    putOn: function(){ console.log("shoes on!"); } 
} 

// Shoe constructor
function Shoe( size, color ) { 
    this.size = size;
    this.color = color;
}

Shoe.heel = 2; 
Shoe.wash = function() { console.log("soap!"); };

// Now create two shoe objects and reset one of their some_consts 
test2 = new Shoe( 10, "blue");
test3 = new Shoe( 10, "yellow");
test3.heel = 5;
test3.some_const = 30;
test3.putOn = function(){ console.log("shoes on 2.0"); };

console.log("\nMethod2 - using prototype object2:");
console.log("The object: ")
console.log( test2 );
console.log("The constant: ")
console.log( test2.some_const );
console.log("I can try to set the static variable incorrectly: ")
console.log( test2.heel );
console.log("The static variable: ")
console.log( Shoe.heel );
console.log("\n")

console.log("\nMethod2 - using prototype object3:");
console.log("The object: ")
console.log( test3 );
console.log("The constant: ")
console.log( test3.some_const );
console.log("The static variable: ")
console.log( test3.heel );
console.log("\n")

// If you run this you will see that the variable is no longer "part" of that object but is instead a part of 
// its parent, that being said, it IS in fact unique. 



