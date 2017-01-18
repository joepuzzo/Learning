"use strict"; 

// Old method
function f1( param1, options = {} ) { 
  let option1 = options.option1 || "Foo";
  let option2 = options.option2 || 10;
  let option3 = options.option3 || "Bar";
}

// New method
function f1( param1, options = {} ) { 
  // Define defaults
  let defaults = { 
    option1: "Foo",
    option2: 10,
    option3: "Bar"
  }
  // Merge defaults with options
  // Note things in options will take presidence over defaults 
  let settings = Object.assign( {}, defaults, options ); 
}
