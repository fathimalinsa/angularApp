angular.module('myApp')
.service('addUserService', function($http){

        this.addUser = function(){
            return $http.get('samplejson/addUser.json').then(function(response) {
               return response.data;
           });
       }
});
