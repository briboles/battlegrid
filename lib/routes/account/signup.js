// All endpoints related to signing up.

var valNewUser = require(global.lib_path+'/auth/validation');
var User = require(global.lib_path+'/models/user.model');

module.exports = function (app, passport) {

  app.post('/signup', signup);

  // Full Account Signup
	function signup (req, res, next) {
	  passport.authenticate('signup', function (err, user, info) {
			if (err) return next(err); 
			if (!user) {
				// User Creation Failed
				return res.status(400).send(info);
			}
			req.logIn(user, function(err) {
        if (err) return next(err);
        var redirectUrl = req.session.returnTo || '/manager';
        return res.status(200).send({ "success": true, "redirectUrl": redirectUrl });
      });
		})(req, res, next);
	}

}

