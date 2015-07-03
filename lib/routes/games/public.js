var isAuth = require(global.lib_path+'/auth/isAuth');
var Game = require(global.lib_path+'/models/gamestate.model');

module.exports = function (app) {

  app.get('/publicgames', function(req,res) {

    var query = {
    	completed: false,
      gamefull: false,
      private: false
    };

    var q = Game.find(query).select('player1.username created');
    q.populate('player1.username', 'username')
     .exec(function (err, game) {
      res.send(game);
    });
  });

};