"use strict";
// Rest parameters
function f1( ...stuff ) { 
  for( let i of stuff ) { 
    console.log( i );
  }
}

f1( "Hello", "World", "Foo", "Bar");

let mystuff = [ "Hello", "World", "Foo", "Bar"];

f1( ...mystuff ); 
