angular.module('myApp')
.service('userDetailsService', function($http){

        this.fetchUsers = function(){
            return $http.get('samplejson/users.json').then(function(response) {
               return response.data;
           });
       }
});
