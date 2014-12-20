'use strict';

myApp.service('Userservice', ['$http', function ($http) {
  // var baseUrl = 'https://gitmas.herokuapp.com';
  var baseUrl = 'http://localhost:9000';
  return {
    login: function (loginData) {
      return $http({
        method: 'POST',
        url: baseUrl + '/api/user/login',
        data: loginData
      });
    }
  };
}]);