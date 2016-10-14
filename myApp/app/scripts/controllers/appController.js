'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('AppController', function ($scope,$http,$state,$rootScope,$stateParams,userDetailsService) {
    $rootScope.setLoginDetails = function (){
    	$rootScope.isLoggedIn = localStorage.getItem("isLoggedIn");
    	$rootScope.loggedInUserName = localStorage.getItem("loggedInUserName");
    	$rootScope.loggedInRole = localStorage.getItem("loggedInRole");
    }
    $rootScope.logout = function(){
    	localStorage.setItem("isLoggedIn", false);
    	localStorage.setItem("loggedInUserName", null);
    	localStorage.setItem("loggedInRole", null);
    	$state.go("login")
    }
    $rootScope.$on('$stateChangeStart', function (event, next, toParams) {
        $rootScope.setLoginDetails();
        if($rootScope.isLoggedIn!=true) {
            if(next.name == "login"){
                return; // no need to redirect 
            }
            else{
                $state.go("login");
            }
        }
    })
  });
