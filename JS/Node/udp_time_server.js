

var net = require('net');
var dgram = require('dgram');

var now = function() {
  console.log('client connected');
  var date = new Date();
  //date.setFullYear(2014);
  return new Buffer(date.toUTCString() + "\r\n");
};

var tcpserver = net.createServer(function(c) {
  c.write(now());
  c.end();
});
tcpserver.listen(123);

var udpserver = dgram.createSocket("udp4", function(msg, rinfo) {
    console.log('client connected udp');
    var daytime = now();
    console.log("Sending: " + daytime + "0 to " + rinfo.port + " " + rinfo.address );
    udpserver.send(daytime, 0, daytime.length, rinfo.port, rinfo.address);
});

udpserver.bind(123);

