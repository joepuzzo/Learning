"use strict";
function f1( param1 = "default"){
    console.log( param1 ); 
}
function f2( param1, { param2, param3 }){
    console.log( param1 ); 
    console.log( param2 ); 
    console.log( param3 ); 
}
