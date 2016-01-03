/*-----------------------------Imports--------------------------------*/
var http = require('http');

/*-----------------------------Constants--------------------------------*/
const REGISTERPORT = 4444;

// Create the registration server and pass in the handler function
var registerServer = http.createServer( handleRegistration );

// Registration handler function
function handleRegistration( request, response ) { 
    
}

// Start up the server
registerServer.listen( REGISTERPORT, function(){
    console.log("Node listening on http://localhost:%s", REGISTERPORT);
});

