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
    $rootScope.isLoggedIn = localStorage.getItem("isLoggedIn");
    $rootScope.loggedInUserName = localStorage.getItem("loggedInUserName");
    $rootScope.loggedInRole = localStorage.getItem("loggedInRole");
  });
