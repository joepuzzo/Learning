function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

Fencepost.prototype = {
  sendRopeTo: function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function(x, y) {
    this.x = x;
    this.y = y;
  },
  valueOf: function() {
  return Math.sqrt(this.x * this.x +
                   this.y * this.y);
  },
  toString: function() { 
    var output = "Fence post #" + this.postNum + ":\n";
    output += "Connected to posts:\n";
    for( var i in connectionsTo ) { 
        output += i.postNum + "\n";
        } 
        output += "Distance from ranch: " + this.valueOf() + " yards";
    //console.log(output)
    return output; 
    } 
};

// override the toString method



