// All endpoints related to signing up or logging in.

var valNewUser = require(global.lib_path+'/auth/validation');
var User = require(global.lib_path+'/models/user.model');

module.exports = function (app, passport) {

  app.get('/forgot', function(req, res) {
    res.render('forgot', { title: 'Password Retrieval' });
  });

}