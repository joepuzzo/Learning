
function Foo(){
  this.bar = "baz";
}

Foo.prototype.log = function(){
  console.log( this.bar );
}

module.exports = Foo;
