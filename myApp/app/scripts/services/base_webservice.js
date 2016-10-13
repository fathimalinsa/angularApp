myApp.service('BaseWebService',['$http', '$q', '$window', function($http, $q, $window){

    /**
    *   A http requester method for calling webservice
    *   @param {function} function of the method to call like $http.get, $http.put..
    *   @param {string} webservice url
    *   @param {Object} data for webservice
    *   @return {promise}
    */
    this.callWebService = function(httpMethod, url, params,token){

        var deferred = $q.defer();
        if(typeof params === "undefined"){
            params = "";
        }

        var httpDict = {};
        httpDict.url = url;
        httpDict.method = httpMethod;
        // httpDict.headers={'Content-Type': 'application/json','token': '3a7d6efe09dca3ace97ffbfa59bc97fd9b54202281ace1fdda538a76834b915cb40764c793534946ea5dfcc179f78e4b3b697242896ef69b31895a02ffb73a09'};
        httpDict.headers={'Content-Type': 'application/json'};
        if(httpMethod === 'GET' || httpMethod === 'DELETE'){
            httpDict.params = params;
        }
        else if(httpMethod === 'POST' || httpMethod === 'PUT'){
            httpDict.data = params;
        }

        $http(httpDict).success(function(response,status,headers) {
          console.log(headers());
            if(response.status === 200){
              console.log("reached");
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

    this.getJSON = function(url, params, token) {
        return this.callWebService("GET", url, params, token);
    };

    this.putJSON = function(url, params) {
        return this.callWebService("PUT", url, params);
    };

    this.postJSON = function(url, data,token) {
        return this.callWebService("POST", url, data, token);
    };

    this.postJSONnoHeader = function(url, data) {
        console.log("reached post");
        return this.callWebService("POST", url, data);
    };

    this.deleteJSON = function(url, params) {
        return this.callWebService("DELETE", url, params);
    };

}]);
