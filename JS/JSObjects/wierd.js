function HIA( lat, lon, alt ) {
    return {
        type: "hia",
        lat: lat, 
        lon: lon, 
        alt: alt
    }
}

HIA.prototype.validate = function() { 
    console.log("HELLO WORLD!");
}

var test = new HIA( 2, 3, 4 );

console.log(test);

test.validate();
