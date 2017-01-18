"use strict";

/*---- Object cunstructing ----*/

// Old method
function buildUser( first, last ) { 
  let fullName = first + " " + last;
  return { first: first, last: last, fullName: fullName };
}

// New method
function buildUser2( first, last ) { 
  let fullName = first + " " + last;
  return { first, last, fullName };
}


let user1 = buildUser("Joe", "Puzzo");
let user2 = buildUser("Anthony", "Puzzo");

console.log( user1 );
console.log( user2 );


/*---- Object destructuring ----*/

// Old method
let first = user1.first;
let last  = user1.last;
let fullName = user1.fullName;

// New method
//let { first, last, fullName } = user1;
//let { first, fullName } = user1;

/*---- Object constructing with functions ----*/

// Old method
function buildUser3( first, last, postCount) { 
  let fullName = first + " " + last;
  const ACTIVE_POST_COUNT = 10;
  return { 
    first, 
    last, 
    fullName,
    isActive: function(){ 
      return postCount >= ACTIVE_POST_COUNT;
    }
  };

}

// New method
function buildUser4( first, last, postCount ) { 
  let fullName = first + " " + last;
  const ACTIVE_POST_COUNT = 10;
  return { 
    first, 
    last, 
    fullName,
    isActive(){ 
      return postCount >= ACTIVE_POST_COUNT;
    }
  };
}


