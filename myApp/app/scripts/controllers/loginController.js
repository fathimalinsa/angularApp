'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('loginController', function ($rootScope,$scope,$http,$state,$stateParams,loginService) {
    $scope.user = {};
    $scope.login = function(user){
      console.log("login clicked");
      if(($scope.user.userName==="")||($scope.user.userName === undefined)){
        $scope.showErrormessage = true;
        $scope.errorMessage = "Enter your username";
      }
      else if(($scope.user.password==="")||($scope.user.password === undefined)){
        $scope.showErrormessage = true;
        $scope.errorMessage = "Enter your password";
      }
      else{
        loginService.login(user)
          .then(function(data){
            // var loginStatus = data.status;
            if (data.status == "200"){
              console.log("login success");
              var userRole = '';
              localStorage.setItem("isLoggedIn", true);
              localStorage.setItem("loggedInUserName", user.userName);
              if((data.role == '')||(data.role == undefined)){
                localStorage.setItem("loggedInRole", "master");
              }
              else {
                localStorage.setItem("loggedInRole", data.role);
              }
              $state.go("userDetails");
            }
          },
          function(error){
            console.log(error);
            status = error.status;
            if(status=="403"){
              $scope.showErrormessage = true;
              $scope.errorMessage = "Username and password do not match";
            }
          }
        );
      }
    }
    // var verifylogin = function(data){
    //   console.log("verfiy");
    //   if (data.status == "200"){
    //     console.log("login success");
    //     localStorage.setItem("isLoggedIn", true);
    //     $rootScope.isLoggedIn = true;
    //     // $rootScope.loggedInUserName = data.userName;
    //     $state.go("userDetails")
    //   }
    // }
  });
