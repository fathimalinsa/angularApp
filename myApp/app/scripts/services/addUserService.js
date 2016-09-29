angular.module('myApp')
.service('addUserService', function($q,$http,appConstants,BaseWebService){

        this.addUser = function(userParams){
          sendData = {};
          //   return $http.get('samplejson/addUser.json').then(function(response) {
          //      return response.data;
          //  });
          sendData.user = userParams;
          var deferred = $q.defer();
          var url = appConstants.baseUrl+'/users/create';
            BaseWebService.postJSON(url, sendData).then(function(data) {
              console.log(data);
            deferred.resolve(data);
            },function(data){
          deferred.reject(data);
          });
          return deferred.promise;
       }
});
