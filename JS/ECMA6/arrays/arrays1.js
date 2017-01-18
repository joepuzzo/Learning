"use strict";

/*---- Array destructuring----*/

// Old method
let users = ["Sam", "Tyler", "Brook"];
let a = users[0];
let b = users[1];
let c = users[2];

// New method
let users = ["Sam", "Tyler", "Brook"];
let [a,b,c] = users;

// Discard Tyler hahaha!
let [d, ,e] = users;
