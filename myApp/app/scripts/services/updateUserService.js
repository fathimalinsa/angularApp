angular.module('myApp')
.service('updateUserService', function($q,$http,appConstants,BaseWebService){

        this.updateUser = function(userParams){
          sendData = {};
          //   return $http.get('samplejson/addUser.json').then(function(response) {
          //      return response.data;
          //  });
          sendData.user = userParams;
          var deferred = $q.defer();
          var url = appConstants.baseUrl+'/users/update?username='+userParams.user_name;
          var token = 'fdsfsdgsfgfgfgfgdfdf';
            BaseWebService.postJSON(url, sendData, token).then(function(data) {
              console.log(data);
            deferred.resolve(data);
            },function(data){
          deferred.reject(data);
          });
          return deferred.promise;
       }
});
