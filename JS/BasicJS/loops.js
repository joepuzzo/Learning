// Add a new function to the array prototype
Array.prototype.test = function() { 
    return 2;
} 

//Create a test array
test = [1,2,3,4]

//Itterate through all "elements" of array
for( i in test ) { 
    console.log(i);
}
