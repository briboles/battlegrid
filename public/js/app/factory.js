angular.module('battleship').factory('httpservice', function($http, $q){
  var service = {};

  service.get = function(endpoint) {
    var deferred = $q.defer();

    $http.get(endpoint)
      .success(function(data, status) {
        deferred.resolve(data);
      }).error(function(data, status) {
        console.error(data + ' ' + status);
        return false;
      });
    return deferred.promise;
  };

  service.post = function(endpoint, postdata) {
    var deferred = $q.defer();

    $http.post(endpoint,postdata)
      .success(function(data, status) {
        deferred.resolve(data);
      }).error(function(data, status) {
        deferred.resolve(data);
      });
    return deferred.promise;
  };

  return service;
});

