
var Game = require('./gamedata');
var User = require(global.lib_path+'/models/user.model');
var GameState = require(global.lib_path+'/models/gamestate.model')

module.exports = function(io) {

  io.on('connection', function (socket) {

  	console.log(socket.request.session);

    socket.on('CreateNewGame', function(){
    	// Confirm there is an active login session and create game
    	var id = socket.request.session.passport.user;

  		var gameinit = new Game(id);
      var game = new GameState(gameinit);

      game.save(function(err, game) {
        if (err) return socket.emit('Error',err);
        console.log(game);
        socket.emit('GameCreated',{id: game._id})
      });
    });
	  socket.on('disconnect', function (data) {
	    console.log('Disconnected');
	  });

  });
  
}
