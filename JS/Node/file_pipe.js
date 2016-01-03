// Write file to std out
var fs = require('fs');

var file = fs.createReadStream('fruits.txt');

file.pipe(process.stdout);

// By defualt pipe will close the writer stream but 
// we can prevent this
var fs = require('fs');

var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile, { end: false } );

file.on('end', function(){
  destFile.end('Finished!');
});


