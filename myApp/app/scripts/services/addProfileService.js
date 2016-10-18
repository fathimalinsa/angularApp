angular.module('myApp')
.service('addProfileService', function($q,$http,appConstants,BaseWebService){

        this.addProfile = function(userParams){
          sendData = {};
          //   return $http.get('samplejson/addUser.json').then(function(response) {
          //      return response.data;
          //  });
          sendData.profile = userParams;
          var deferred = $q.defer();
          var url = appConstants.baseUrl+'/profile/create';
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
