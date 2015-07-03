angular.module('battleship').controller(
	'gameCtrl', 
	function($scope, $cookies, $routeParams) {
    console.log($routeParams.gameid);
	});


angular.module('battleship').controller(
  'auth',
  function($scope, $location, httpservice) {

    $scope.formData = {
      name: '',
      email: '',
      username: '',
      password: ''
    };

    $scope.errorMessage = '';
    
    $scope.login = function () {
      httpservice.post('/login', $scope.formData).then(function(data) {
        console.log(data);
        if (data.success) {
          $location.path('/mygames');
        }
        else if (data.error) {
          $scope.errorMessage = data.error;
        }
      });
    }

    $scope.signup = function () {
      httpservice.post('/signup', $scope.formData).then(function(data) {
      	console.log(data);
        if (data.success) {
          $location.path('/mygames');
        }
        else if (data.error) {
          $scope.errorMessage = data.error;
        }
      });
    }
	});

angular.module('battleship').controller(
  'mygames',
  function($scope, $location, httpservice) {
    
    httpservice.get('/mygames?completed=false').then(function(data) {
      console.log(data);
      $scope.activegames = data;
    });

    httpservice.get('/mygames?completed=true').then(function(data) {
      console.log(data);
      $scope.endedgames = data;
    })

  });


angular.module('battleship').controller(
  'joingame',
  function($scope, $location, httpservice) {
    
    httpservice.get('/publicgames').then(function(data) {
      console.log(data);
      $scope.publicgames = data;
    });
  });