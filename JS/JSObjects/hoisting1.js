// Constructor
function SomeObject( ) {
  var vm = this;
  vm.hello = "hello";
  vm.test = test;
  var str = "testig!";

  function test() { 
    console.log( vm.hello );
    console.log( str );
  } 
}


var s = new SomeObject();

s.test();
