var usergames = require('./mygames');
var publicgames = require('./public');

module.exports = function (app) {

  usergames(app);
  publicgames(app);

};