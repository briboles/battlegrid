// Create module and inject required items.
(function () {
  var app = angular.module('battleship', ['ngRoute','ngCookies']);

  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/game/:gameid', {
          templateUrl: 'views/gamestage.html',
          controller: 'gameCtrl',
          controlerAs: 'game'
        }).
        when('/mygames', {
          templateUrl: 'views/mygames.html',
          controller: 'mygames',
          controlerAs: 'mygames'
        }).
        when('/joingame', {
          templateUrl: 'views/joingame.html',
          controller: 'joingame',
          controlerAs: 'joingame'
        }).
        when('/', {
          templateUrl: 'views/home.html'
        }).
        when('/login', {
          templateUrl: 'views/login.html',
          controller: 'auth'
        }).
        when('/signup', {
          templateUrl: 'views/signup.html',
          controller: 'auth'
        }).
        otherwise({
          templateUrl: 'views/home.html'
        });
    }
  ]);

  
  // Global Display Controllers
  app.controller('MainMenu', function() {
    this.menuitems = [
			  {
			    displaytext: 'Login',
			    route: '#/login'
			  },
			  {
			    displaytext: 'My Games',
			    route: '#/mygames'
			  },
			  {
			    displaytext: 'Join Game',
			    route: '#/joingame'
			  },
			  {
			    displaytext: 'New Game',
			    route: '#/newgame'
			  }
			];
  });
  
})();