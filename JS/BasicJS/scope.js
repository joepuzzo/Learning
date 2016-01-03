
function f() { 
    var x = 2;
    y = 3
    return x * 2;
}

// This will print 4
console.log( f() );
// This will print undefined
console.log( x ); 
// This will print 3
console.log( y ); 

var test_array = [1,2,3,4]

// I and x are NOT scoped within the loop!!
for( var i = 0, x = test_array.length; i < x; i++ ) { 
    console.log( "Hello " + test_array[i] );
}

// This will work!
console.log( "i: "+i )
console.log( "x: "+x )


// j and k ARE scoped within the loop!!
/*for( let i = 0, x = test_array.length; i < x; i++ ) { 
    console.log( "Hello " + test_array[i] );
}

// This will work!
console.log( "j: "+j )
console.log( "k: "+k )*/



