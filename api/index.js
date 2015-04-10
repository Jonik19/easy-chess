var app = require('express')();
var io = require('socket.io');

var http = require('http');
var server = http.createServer(app);

var config = require('./config');
var routes = require('./modules/routes');
var log = require('./modules/log');

server.listen(config.port, function () {
  log('listening on *: '+config.port);
});

