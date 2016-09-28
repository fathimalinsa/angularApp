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
      if(($scope.user.username==="")||($scope.user.username === undefined)){
        $scope.showErrormessage = true;
        $scope.errorMessage = "Enter your email";
      }
      else if(($scope.user.password==="")||($scope.user.password === undefined)){
        $scope.showErrormessage = true;
        $scope.errorMessage = "Enter your password";
      }
      else{
        loginService.login(user).then(function(data){
          // var loginStatus = data.status;
          verifylogin(data);
        });
      }
    }
    var verifylogin = function(data){
      console.log("verfiy");
      if (data.status == "200"){
        console.log("login success");
        localStorage.setItem("isLoggedIn", true);
        $rootScope.isLoggedIn = true;
        $rootScope.loggedInUserName = data.userName;
        $state.go("userDetails")
      }
    }
  });
