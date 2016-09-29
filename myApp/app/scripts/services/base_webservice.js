myApp.service('BaseWebService',['$http', '$q', '$window', function($http, $q, $window){

    /**
    *   A http requester method for calling webservice
    *   @param {function} function of the method to call like $http.get, $http.put..
    *   @param {string} webservice url
    *   @param {Object} data for webservice
    *   @return {promise}
    */
    this.callWebService = function(httpMethod, url, params){

        var deferred = $q.defer();
        if(typeof params === "undefined"){
            params = "";
        }

        var httpDict = {};
        httpDict.url = url;
        httpDict.method = httpMethod;
        httpDict.headers={'Content-Type': 'application/json'};
        if(httpMethod === 'GET' || httpMethod === 'DELETE'){
            httpDict.params = params;
        }
        else if(httpMethod === 'POST' || httpMethod === 'PUT'){
            httpDict.data = params;
        }

        $http(httpDict).success(function(response) {
          console.log(response);
            if(response.status === 200){
                deferred.resolve(response);
            } else if(response.status === 400) {
                // please note the type of error expecting is array
                deferred.reject(response.responseMessage);
            } else if(response.status === 401){
                //Quick fix
                localStorage.setItem("isLoggedIn", false);
                $window.location.href = '#/login' ;
            }/* else if(response.status === 403){
                //TO DO show error message. Forbidden. Yo don't have privilage to access this feature.
            }*/
        }).error(function(errors, status) {
          console.log(errors);
            if(status === 400){
                deferred.reject(errors.responseMessage);
            }else if(status === 401){
                // 401- Unauthorized
                // so lets redirect to login page
                localStorage.setItem("isLoggedIn", false);
                $window.location.href = '#/login' ;
            }
            else if(errors.status === 409){
              deferred.reject(errors);
            }
            else if(errors.status === 403){
              deferred.reject(errors);
            }
            else {
                deferred.reject(errors.responseMessage);
            }

        });
        return deferred.promise;
    };

    this.getJSON = function(url, params) {
        return this.callWebService("GET", url, params);
    };

    this.putJSON = function(url, params) {
        return this.callWebService("PUT", url, params);
    };

    this.postJSON = function(url, data) {
        return this.callWebService("POST", url, data);
    };

    this.deleteJSON = function(url, params) {
        return this.callWebService("DELETE", url, params);
    };

}]);
