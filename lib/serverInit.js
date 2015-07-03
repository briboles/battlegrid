// serverInit.js - Setup / configure custom middleware

var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
var passport = require(global.lib_path+'/auth/config');

// Custom Routes
var gameInit = require(global.lib_path+'/game');
var routes = require(global.lib_path+'/routes')

// Connect to mongoDB database 
mongoose.connect('mongodb://127.0.0.1:27017/battleship');

// Configure Sessions
var sessionOptions = {
  secret: "battleface",
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
};
var expressSession = session(sessionOptions);

module.exports = function (app, io) {

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.static(global.root_path + '/public'));

  io.use(function(socket,next){
    expressSession(socket.request,socket.request.res, next);
  });

  // Session / Auth Middleware
  app.use(expressSession);
  app.use(passport.initialize());
  app.use(passport.session());

  // Setup Game
  gameInit(io);

  // Express Routes
  routes(app, passport);

  // Handle any unhandled requests with a 404 message.
  app.use(function(req, res, next){
    res.send('404 - Page Not Found');
  });

}