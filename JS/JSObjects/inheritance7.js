function Bird(){};
function DatatypeBird(){};
DatatypeBird.prototype = Object.create(Bird.prototype);

var NumberNommer = function(){};
NumberNommer.prototype = Object.create(DatatypeBird.prototype);

var myNumberNommer = new NumberNommer();
