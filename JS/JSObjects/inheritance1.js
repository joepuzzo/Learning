// This will work fine because shoe constructor gets hoisted
test1 = new Shoe( 10, "blue");
console.log( test1.color )

// This will not work because at this time the put on is not defined
//test1.putOn();

// Note we can define the prototype before the constructor
Shoe.prototype = {
    putOn: function( ) { console.log("Shoe's on!"); }
} 

// And if we try it here we are fine becuase function is hoisted
test2 = new Shoe( 8, "green");
test2.putOn();

function Shoe( size, color ) { 
    this.size = size
    this.color = color
}

// This will def work
test3 = new Shoe( 10, "blue");
test3.putOn();
