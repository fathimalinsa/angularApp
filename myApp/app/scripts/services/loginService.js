angular.module('myApp')
.service('loginService', function($http){
       this.login = function(loginParams){
            console.log(loginParams);
            return $http.get('samplejson/login.json').then(function(response) {
                return response.data;
            });
       }
});
