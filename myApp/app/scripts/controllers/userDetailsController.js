'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('userDetailsController', function ($scope,$http,$state,$stateParams,userDetailsService) {
    userDetailsService.fetchUsers().then(function(data){
      $scope.users = data.userList;
      console.log($scope.users);
    });
    $scope.addUser = function (){
      $state.go("adduser");
    }
  });
