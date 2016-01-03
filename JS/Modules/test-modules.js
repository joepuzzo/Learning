var Shoe1 = require('./module1.js');
var Shoe2 = require('./module2.js').Shoe;

console.log( Shoe1.size );
//Shoe1.putOn(); // This will not work becuase we only have a reference to the SHOE function
