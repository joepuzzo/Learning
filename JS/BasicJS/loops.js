// Add a new function to the array prototype
console.log("I added a function called test to the array class :)\n");
Array.prototype.test = function() { 
    return 2;
} 

//Create a test array
test = [1,2,3,4]
console.log("The test array:");
console.log( test );

//Itterate through all keys of array
console.log("\nIterating using for i in");
for( i in test ) { 
    console.log(i);
}

// Itterate over all values in array
console.log("\nIterating using for i of");
for( i of test ) { 
    console.log(i);
}

console.log("\nWhy we have to be careful:");
console.log("var a = []");
console.log("a[5] = 5");
var a = [];
a[5] = 5;
console.log("for( var x in a )"); 
for (var x in a) {
    // Shows only the explicitly set index of "5", and ignores 0-4
    console.log(x);
}
