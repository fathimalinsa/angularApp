angular.module('myApp')
.service('loginService', function($q,$http,appConstants,BaseWebService){
       this.login = function(loginParams){
            sendData = {};
            sendData = loginParams;
            var deferred = $q.defer();
            var url = appConstants.baseUrl+'/users/login';
            console.log(loginParams);
            BaseWebService.postJSONnoHeader(url, sendData).then(function(data) {
              console.log(data);
            deferred.resolve(data);
            },function(data){
              deferred.reject(data);
            });
            return deferred.promise;
       }
});
