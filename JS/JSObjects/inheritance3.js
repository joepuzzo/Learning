
/* === Method-1 We define everything in the constructor === */

// Note I had to call this Shoe1 and not Shoe because if 
// both methods in this file had the same name the second
// verstion would overide the first

// Shoe constructor
function Shoe1( size, color ) { 
    this.size = size
    this.color = color
    this.some_const = 10
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
    some_const: 20
} 

// Shoe constructor
function Shoe( size, color ) { 
    this.size = size;
    this.color = color;
}

// Now create two shoe objects and reset one of there some_consts 
test2 = new Shoe( 10, "blue");
test3 = new Shoe( 10, "yellow");
test3.some_const = 30

console.log("\nMethod2 - using prototype object2:");
console.log("The object: ")
console.log( test2 );
console.log("The constant: ")
console.log( test2.some_const );
console.log("\n")

console.log("\nMethod2 - using prototype object3:");
console.log("The object: ")
console.log( test3 );
console.log("The constant: ")
console.log( test3.some_const );
console.log("\n")

// If you run this you will see that the variable is no longer "part" of that object but is instead a part of 
// its parent, that being said, it IS in fact unique. 



