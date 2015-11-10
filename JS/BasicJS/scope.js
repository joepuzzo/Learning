
function f() { 
    var x = 2;
    y = 3
    return x * 2;
}

console.log( f() );
console.log( x ); 
console.log( y ); 

var test_array = [1,2,3,4]

// I and x are NOT scoped within the loop!!
for( var i = 0, x = test_array.length; i < x; i++ ) { 
    console.log( "Hello " + test_array[i] );
}

console.log( "i: "+i )
console.log( "x: "+x )
