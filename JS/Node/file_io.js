var fs = require('fs');
var file = fs.createReadStream("fruits.txt");
file.on('readable', function() {
    var chunk = null;
    while( (chunk = file.read()) !== null) {
      console.log(chunk.toString());
    }
} );

