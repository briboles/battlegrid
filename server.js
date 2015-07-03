// -------------------------------
//        Setup WebServer
// -------------------------------

// Define global path variables
global.root_path = __dirname;
global.lib_path = __dirname + '/lib';

// Require Modules
var express = require('express');
var serverInit = require(lib_path+'/serverInit');

// Server Setup
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

// Configure Server
serverInit(app,io);

server.listen(8003);
console.log('Server running on port 8003');