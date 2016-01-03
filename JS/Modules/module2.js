//GOAL: Test to see if we have access to put on if we export Shoe

Shoe.prototype = {
    putOn: function( ) { console.log("Shoe's on!"); }
} 
function Shoe( ) { 
    this.size = 1
    this.color = "green"
    console.log("CONSTRUCTING!!")
}

exports.Shoe = Shoe;

