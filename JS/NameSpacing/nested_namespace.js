
// We declare a namespace for my stuff here
var JOESSTUFF = { 
    list: ["Joe","Bob","Kevin"],
    myfunc: function() { 
        for( i in this.list ) { 
            console.log(i); 
        }
    }
    NESTED: { 
        list: ["Ggeorge","Fred","Buddy"]
    }
}; //Note variable declaration so you should put semi here!!
