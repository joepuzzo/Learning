var events = require('events');
var EventEmitter = events.EventEmitter;

Chat.prototype = new EventEmitter();

function Chat() { 
    // Call superconstructor.. cool! 
    EventEmitter.call(this);
    // Define custom data
    this.users = [];
    this.chatlog = [];
}


// Define event emitter functions
Chat.prototype.join = function( user, pass ) { 
    this.emit('join', user, pass );
}

Chat.prototype.message = function( mesg ) {
    this.emit('message', mesg );
}

// Now create a new chat object
var chat = new Chat();

console.log( chat );

chat.on('message', function(message) {
  console.log( message );
  this.chatlog.push(message);
});

chat.on('join', function(username, password) {
  console.log( "User: " + username + " joined" );
  console.log( "His password is: " + password  );
  this.users.push(username);
});

chat.on('does_not_exist', function(never) { 
    console.log("NOT GANNA HAPPEN!");
});


chat.join("Joe", "FooBar");
chat.message( "Hello World!" );
console.log( chat );

