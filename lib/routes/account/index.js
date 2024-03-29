// All account / user management related endpoints.

var login = require('./login');
var logout = require('./logout');
var signup = require('./signup');
var pwreset = require('./reset');
var guest = require('./guest');

module.exports = function (app, passport) {

  login(app, passport);
  logout(app);
  signup(app, passport);
  pwreset(app);
  guest(app,passport);

}
