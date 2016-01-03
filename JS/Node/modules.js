var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};
 
// Export these functions so others can 
// var mymods = require(modules.js)
exports.info = info; 
exports.warn = warn;
exports.error = error;
