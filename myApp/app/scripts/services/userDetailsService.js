angular.module('myApp')
.service('userDetailsService', function($q,$http,appConstants,BaseWebService){

        this.fetchUsers = function(){
          var deferred = $q.defer();
          var url = appConstants.baseUrl+'/users/list';
          var params = {};
          var token = '3a7d6efe09dca3ace97ffbfa59bc97fd9b54202281ace1fdda538a76834b915cb40764c793534946ea5dfcc179f78e4b3b697242896ef69b31895a02ffb73a09';
            BaseWebService.getJSON(url,params,token).then(function(data) {
              console.log(data);
            deferred.resolve(data);
            },function(data){
          deferred.reject(data);
          });
          return deferred.promise;
       }
       this.deleteUser = function(userParams){
         sendData = {};
         //   return $http.get('samplejson/addUser.json').then(function(response) {
         //      return response.data;
         //  });
         sendData.user = userParams;
         var deferred = $q.defer();
         var url = appConstants.baseUrl+'/users/delete?username='+userParams.user_name;
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
