function Restaurant() {
}

Restaurant.prototype = (function() {
    var private_stuff = function() {
        // Private code here
        console.log("private method");
    };

    return {

        constructor:Restaurant,

        use_restroom:function() {
            private_stuff();
        }

    };
})();

var r = new Restaurant();

// This will work:
r.use_restroom();

// This will cause an error:
//r.private_stuff();

console.log(r);
