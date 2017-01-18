// Define function objects
    var func1   = function() { console.log("hello from func1"); }
    func1.func2 = function() { console.log("hello from func1.func2"); };
    var _       = function() { console.log("hello from _"); }
    //var \\u0024  = function() { alert("hello from $ defined as \u0024"); }
    var Ø       = function() { console.log("hello from Ø"); }
    var $$$$$   = function() { console.log("hello from $$$$$"); }
    var $func$  = function() { console.log("hello from $func$"); }
    var __      = function() { console.log("hello from __"); }
    _.$         = function() { console.log("hello from _.$"); }
    __.__       = function() { console.log("hello from __.__"); }
    //$.member    = function() { alert("hello from $.member"); }

    // Call functions defined above one by one
    func1();
    func1.func2();
    _();
    //$();
    Ø();
    $$$$$();
    $func$();
    //$.member();
    _.$();
    __();
    __.__();
