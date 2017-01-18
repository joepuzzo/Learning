"use strict";
console.log(testvar);  // Will print undefined because var is hoisted but not yet set
console.log(testfake); // Will fail because testfake does not exist
console.log(testlet);  // Will fail because the let does not exist yet
var testvar = 5;
let testlet = 6;
