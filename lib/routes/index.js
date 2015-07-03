// -------------------------------
//   Express Server Routing
// -------------------------------

var account = require('./account');
var games = require('./games');

module.exports = function (app, passport) {
  
  account(app, passport);
  games(app);

} 
