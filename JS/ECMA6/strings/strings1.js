"use strict";

// Old method
function buildUser( first, last ) { 
  let fullName = first + " " + last;
  return { first: first, last: last, fullName: fullName };
}

// New method
function buildUser2( first, last ) { 
  let fullName = `${first} ${last}`; // Note the backticks!!!
  return { first, last, fullName };
}

let user1 = buildUser("Joe", "Puzzo");
let user2 = buildUser("Anthony", "Puzzo");

console.log( user1 );
console.log( user2 );
